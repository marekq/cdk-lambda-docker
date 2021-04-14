#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkLambdaDockerStack } from '../lib/cdk-lambda-docker-stack';

const app = new cdk.App();
new CdkLambdaDockerStack(app, 'LambdaDocker', {});
