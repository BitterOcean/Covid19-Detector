# :mask: **Covid19 Detector**
![Awesome](https://img.shields.io/badge/.-Awesome-%23FC60A8?style=for-the-badge&logo=awesomelists)
![Builed](https://img.shields.io/azure-devops/build/totodem/8cf3ec0e-d0c2-4fcd-8206-ad204f254a96/2?style=for-the-badge)
![License](https://img.shields.io/packagist/l/doctrine/orm?style=for-the-badge)

| . | . |
| - | - |
| ![Covid19DetectorLandingPage](https://user-images.githubusercontent.com/60509979/194156486-b84abf8b-5c78-427d-94bf-1bb696f2f386.png) | ![Covid19DetectorResultShow](https://user-images.githubusercontent.com/60509979/194156563-14d3a535-28ed-450c-9e71-f01e70cf020b.png) |


In this project, I have a Django-React Web App which can detect COVID-19 from CT Scan Images.

## :movie_camera: **<a href="https://bitterocean.github.io/Covid19-Detector/">Live Demo</a>**

---
## **Table of contents**
- [Dataset](#package-dataset)
- [Deep Learning Model](#mechanical_armrobot-deep-learning-model)
- [Web App Backend](#woman_technologist-web-app-backend)
- [Web App Frontend](#woman_technologist-web-app-frontend)
- [SUPPOERT](#email-suppoert)
- [LICENSE](#copyright-license)
 
 
## :package: **Dataset**

### <a href="https://www.kaggle.com/plameneduardo/sarscov2-ctscan-dataset?select=non-COVID"><img src="https://img.shields.io/badge/Dataset-SarsCov2--CT--Scan-%2320BEFF?style=for-the-badge&logo=kaggle" /></a>

| .        | Covid | Non-Covid |
| -------- | ----- | --------- |
| Dataset  | 1252 images  | 1230 images     | 
| samples  | ![output_13_0](https://user-images.githubusercontent.com/60509979/194172008-5a47b2e0-ea28-4ed3-b57a-04b6fd13da42.png) | ![output_15_0](https://user-images.githubusercontent.com/60509979/194172054-f895c818-b0f5-43c5-a1c5-df5e3f6d2083.png) |


| Train Set (80%) | Validation Set (20%) |
| - | - |
| 1985 images | 496 images |

 
## :mechanical_arm::robot: **Deep Learning Model**

#### <a href="https://colab.research.google.com/drive/1e2Tq9ymAPo9kcQfRv-htGgw3eWNaE_zd?usp=sharing" target="_blank"> <img src="https://img.shields.io/badge/Google%20Colab-Source%20Code-%23F9AB00?style=for-the-badge&logo=googlecolab" /> </a>

this is the architecture of **DenseNet121**

![densenet121](https://user-images.githubusercontent.com/60509979/197634917-e845bca3-510d-4acc-803f-ed0698a693bc.png)


### :monocle_face: **Model Evaluation**

| Confusion Matrix | Accuracy Curve | Loss Curve |
| - | - | - |
| ![output_38_1](https://user-images.githubusercontent.com/60509979/194162941-063b2ad8-6429-4a02-9642-1eebb3563f6a.png) | ![output_41_0](https://user-images.githubusercontent.com/60509979/194163462-420dccb4-22c8-43d8-afc7-ac15a729dc9a.png) | ![output_41_1](https://user-images.githubusercontent.com/60509979/194163499-68dc85d0-08fb-4629-8d14-32910ff3e86c.png) |

<div align="center">
 <table style="width:70%;font-size:12pt;">
     <th style="text-align:center;">Metric</th>
     <th style="text-align:center;">Formula</th>
     <th style="text-align:center;">Proposed Model</th>
     <tr>
         <td style="text-align:center;">Accuracy</td>
         <td style="text-align:center;font-size:13pt;">$$\frac{TP~+~TN}{TP~+~TN~+~FP~+~FN}$$</td>
         <td style="text-align:center;">94.36%</td>
     </tr>
     <tr>
         <td style="text-align:center;">Sensitivity</td>
         <td style="text-align:center;font-size:13pt;">$$\frac{TP}{TP~+~FN}$$</td>
         <td style="text-align:center;">93.49%</td>
     </tr>
     <tr>
         <td style="text-align:center;">Specificity</td>
         <td style="text-align:center;font-size:13pt;">$$\frac{TN}{TN~+~FP}$$</td>
         <td style="text-align:center;">95.23%</td>
     </tr>
 </table>
</div>

## :woman_technologist: **Web App Backend**


[![Pinned Repository](https://github-readme-stats.vercel.app/api/pin/?username=BitterOcean&repo=Covid19-Detector-Backend)](https://github.com/BitterOcean/Covid19-Detector-Backend)


First of all clone the project :

```bash
git clone https://github.com/BitterOcean/Covid19-Detector-Backend.git
```

then, create a virtual enviroment and install python required packages :

```bash
mkvirtualenv -p /usr/bin/python3.10 venv
source ~/.virtualenvs/venv/bin/activate
pip3 install -r requirements.txt
```

finally, go to the project directory and run the bachend django server :

```bash
cd Covid19-Detector-Backend
python3 manage.py migrate --run-syncdb
python3 manage.py runserver
```

Now the server will run on <a href="http://127.0.0.1:8000/">http://127.0.0.1:8000/</a>



## :woman_technologist: **Web App Frontend**

[![Pinned Repository](https://github-readme-stats.vercel.app/api/pin/?username=BitterOcean&repo=Covid19-Detector)](https://github.com/BitterOcean/Covid19-Detector)

#### step 0 : having Node js 16.x and npm installed

For **Debian and Ubuntu based Linux distributions** :

```bash
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash - \ &&
sudo apt-get install -y nodejs
```
for **other platforms**, take a look at <a href="https://nodejs.org/en/download/package-manager/">Nodejs Official Website</a>.

then, install npm :

For **Debian and Ubuntu based Linux distributions** :
```bash
sudo apt install npm
sudo npm -g install create-react-app
```

for **other platforms**, use <a href="https://google.com">Google</a> to find the instructions. :slightly_smiling_face:.

#### Main Steps:

First of all clone the project :

```bash
git clone https://github.com/BitterOcean/Covid19-Detector.git
```

then, go to the project directory and install required node modules :

```bash
npm i
```
after that, to use it locally, you have to change only one line in ```src/constants/routes.jsx```, so :
```bash
cd Covid19-Detector/src/constants
```
and then change the first line, like below :
```diff
- export const API_ROOT = 'https://covid-19-detector-model.herokuapp.com';
+ export const API_ROOT = 'http://127.0.0.1:8000/';
```
and finally :
```bash
npm start
```
Now the frontend will run on <a href="http://127.0.0.1:3000/">http://127.0.0.1:3000/</a>.
<br />
Eventually, here is the point that everything is ready and you can start using the the "Covid19-Detector". :slightly_smiling_face:.


## :email: **SUPPOERT**

Reach out to me at one of the following places!

- Telegram at <a href="https://t.me/BitterOcean" target="_blank">@BitterOcean</a>
- Gmail at <a href="mailto:maryamsaeedmehr@gmail.com" target="_blank">maryamsaeedmehr@gmail.com</a>

## :copyright: **LICENSE**
[![License](https://img.shields.io/packagist/l/doctrine/orm?style=for-the-badge)](http://badges.mit-license.org)

