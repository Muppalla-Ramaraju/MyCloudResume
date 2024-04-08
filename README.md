# MyCloudResume
The website is currently under maintenance. But it should look like below when the frontend files are opened in the browser from your local machine.
![image](https://github.com/Muppalla-Ramaraju/MyCloudResume/assets/79083233/b56214c7-848a-419f-99f3-6683261c23e7)

 

This repository contains my code for the cloud resume challenge

[AWS Cloud Resume Challenge](https://cloudresumechallenge.dev/) is a project created by Forrest Brazeal to build and test the skills fundamental to a career in Cloud and DevOps space.

The objective of this challenge is to create a resume website analogous to a web service hosted in Enterprise environment. 

I have used HTML, CSS, and JavaScript for frontend and hosted the entire backend architecture in Amazon Web Services.

I have uploaded the html, css and javascript files in S3 Bucket and hosted as a static website.

Upon users request to open the resume website in browser, It sends the request to Route 53 DNS web service to reach the cloudfront CDN first which serves the content hosted in S3 Bucket as a static website.

Parallely, The visitor counter of the website also gets updated. This count is stored in AWS Dynamo DB service. It is retrieved using a Lamda function written in python.

When the website is requested in browser, javascript invokes the lambda function which retrieves and updates the visitor count from Dynamo DB and displays it on the webpage.


![image](https://github.com/Muppalla-Ramaraju/MyCloudResume/assets/79083233/3745ab42-f17f-4c3f-acfe-dabc2280461c)


CICD Architecture

Github workflows is used to deploy any changes in frontend code to S3 Bucket using github actions

www.ramarajucloudresume.com
