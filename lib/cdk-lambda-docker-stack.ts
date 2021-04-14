import * as path from "path";
import * as cdk from "@aws-cdk/core";
import * as Lambda from "@aws-cdk/aws-lambda";
import * as iam from "@aws-cdk/aws-iam";

export class CdkLambdaDockerStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create IAM role for Lambda
    const role = new iam.Role(this, "role", {
      assumedBy: new iam.ServicePrincipal("lambda.amazonaws.com"),
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName("service-role/AWSLambdaBasicExecutionRole"),
        iam.ManagedPolicy.fromAwsManagedPolicyName("CloudWatchLambdaInsightsExecutionRolePolicy")
      ]
    })

    // Define local Docker file
    const dockerfile = path.join(__dirname, "../docker");

    // Create Lambda function for Dockerfile
    const distilbertLambda = new Lambda.DockerImageFunction(this, "docker", {
      code: Lambda.DockerImageCode.fromImageAsset(dockerfile),
      tracing: Lambda.Tracing.ACTIVE,
      memorySize: 256,
      role: role
    });
  }
}