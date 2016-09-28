## bootscore-gulp

# Download using terminal and start working locally
    git clone https://github.com/WebGuyMofassel/gulp-wp.git

# Change Directory to bootscore-gulp and remove README.md FILE
    cd bootscore-wp
    sudo npm install

# your local gulp build is now ready. Now start using command 
    gulp

## Additional Basics for newbie:

# Gulp has some dependancies in order to function properly
    sudo apt-get install nodejs-legacy // Recommended! Installs node and nodejs both support

    sudo apt-get install nodejs // Alternative! it will only install nodejs support

    sudo apt-get install npm // install npm (node package manager)
    sudo npm install npm -g // to update to latest

# gulp basic installation guidelines http://goo.gl/WsS4XW
    Visit above link to check official gulp documentation 

# Adding plugin with gulp. http://gulpjs.com/plugins/
    sudo npm install --save-dev plugin-name

# Few frequently needed plugin list 

    gulp-ruby-sass 
    gulp-autoprefixer
    gulp-plumber
    gulp-uglify
    gulp-livereload


NB: sudo = super user do, permision required. You may need to delete README.md file to avoid any issue while working with this repo locally, if you want to add additional plugin with the repo.