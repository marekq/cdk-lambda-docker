FROM public.ecr.aws/lambda/provided:al2

RUN curl -O https://lambda-insights-extension.s3-ap-northeast-1.amazonaws.com/amazon_linux/lambda-insights-extension.rpm && rpm -U lambda-insights-extension.rpm && rm -f lambda-insights-extension.rpm

COPY bootstrap /var/runtime/bootstrap
COPY function.sh /var/task/function.sh

RUN chmod +x /var/runtime/bootstrap 
RUN chmod +x /var/task/function.sh 

WORKDIR /var/task
CMD [ "function.sh.handler" ]

