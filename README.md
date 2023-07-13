# kirby-release-plugin
The plugin is at [protyping level](https://www.figma.com/file/XJD23d5TJARaMmNxUoYA2h/kirby-maintenance-plugins?type=design&node-id=1501%3A23446&mode=design&t=9Tc8z9nBL0mBmdV0-1). 

The idea is to create a release page accessible from the front end.

**Why this plugin ?**

I want to avoid dependancy from other services (notion, github...) to provide a good maintenance of kirby websites. 

My main inspiration is from the product [launchnotes.io](https://launchnotes.io), with this page for exemple : https://whereby.launchnotes.io/


## MVP
**Features**
- Posts 
- About content
- Custom logo
- Private by default - accessible only for connected people


**TODO**
- [x] Create Dev Environnement 
- [x] Blueprint releases
- [x] Blueprint releases-post
- [ ] Template releases
- [ ] create custom css for this page

## Ideas For the future
**Features**
- Access API for maintenance. It will be consume by another plugin dashboard (I'm also working on it).
- Parameter Public/private accessibility
- Post tag
- Filter
- Pager navigation
- Date navigation
- Search
- Multilangue

## how to install
Installer as git submodule `git submodule add -f  https://github.com/batgithub/kirby-documentation-plugin.git composer/plugins/kirby-documentation-plugin` 

☝️ customize with your files architecture.


## Prototype 

**front end page**
![Preview release page](https://github.com/batgithub/kirby-release-plugin/blob/main/preview/Home.jpg?raw=true)

**admin**
![Preview admin home](https://github.com/batgithub/kirby-release-plugin/blob/main/preview/admin-home.jpg?raw=true)

![Preview admin home tab about](https://github.com/batgithub/kirby-documentation-plugin/blob/main/preview/admin-home%20_%20tab-about.jpg?raw=true)

![Preview admin admin post](https://github.com/batgithub/kirby-release-plugin/blob/main/preview/admin-post.jpg?raw=true)

## How to dev
1.  `npm install`to install dependancies
2. `npm run dev` or `npm run build`
