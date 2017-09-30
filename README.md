####English

Upload files undir dir `build`(can be customized) to ftp server`fe-test/jia/`(can be customized)



####中文

使用node自动上传 `build`(可配置) 目录所有文件到ftp目录 `fe-test/jia/`(可配置)






# Steps


## copy js to your project

####English

copy `upload2ftp.js` and `upload2ftp_conf.js` 

to `{root}/bin/` or `{root}/{whatever_you_name_it}/`


####中文

拷贝`upload2ftp.js` 和 `upload2ftp_conf.js` 

到 `{root}/bin/` 或 `{root}/{whatever_you_name_it}/`





## npm install dependency

`npm install ftp --dev-save`




## run

`node bin/upload2ftp.js`

