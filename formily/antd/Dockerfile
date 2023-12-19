FROM nginx:latest

MAINTAINER yihao.dong@enapir.com

RUN mkdir -p /rapid
RUN mkdir -p /var/run/nginx
WORKDIR /rapid

EXPOSE 80

#默认配置文件
COPY nginx.conf /etc/nginx
COPY build /rapid

RUN  ls /rapid

#docker build -t skyworth/webportal:v2.0.6 .
#docker tag skyworth/webportal:v2.0.6 swr.cn-north-4.myhuaweicloud.com/skyworth/webportal:v2.0.6
#docker push swr.cn-north-4.myhuaweicloud.com/skyworth/webportal:v2.0.6
