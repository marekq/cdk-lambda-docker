FROM public.ecr.aws/lambda/python:latest

# install lambda insights logs agent
RUN curl -O https://lambda-insights-extension.s3-ap-northeast-1.amazonaws.com/amazon_linux/lambda-insights-extension.rpm && \
    rpm -U lambda-insights-extension.rpm && \
    rm -f lambda-insights-extension.rpm

# copy lambda function and set command
COPY app.py .
CMD ["app.lambda_handler"]
