# FROM nginx
# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

FROM nginx

# nginx 설정 파일 복사
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# 애플리케이션 빌드 파일 복사
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
