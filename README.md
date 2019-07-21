# caret-chomebook-devmode-git

Editing HTML and JavaScript on a Chromebook in developer mode running Chromebrew and httpd.

## Notes
* vi doesn't work very well on this Chromebook. I'm using nano instead. 

## References
* https://github.com/skycocker/chromebrew
* https://chromium.googlesource.com/chromiumos/docs/+/master/security/noexec_shell_scripts.md
* https://www.linuxquestions.org/questions/slackware-14/make-%27ll%27-to-run-ls-l-4175524018/
* https://askubuntu.com/questions/1033998/what-command-is-the-alias-ll-for


### Switch to developer mode
* 

### Set a password for chronos
```
sudo chromeos-setdevpasswd
```
### Enable signed boot
```
sudo crossystem dev_boot_signed_only=1
```

### Install Chromebrew
* Open the terminal with Ctrl+Alt+T and type shell.
```
curl -Ls git.io/vddgY | bash
```

### Create a runnable bash script
* The scripts you create in /usr/local/bin will run
* The scripts you create in /home/chronos/user will not

### Create ll alias
```
alias ll='ls -alF'
```

### Install httpd
```
crew install httpd
```

### Make a deploy script to copy files from ~/MyFiles/{} to /
```
nano /usr/local/bin/deploy-to-httpd.sh
```
```
#!/bin/bash
#echo hello
echo "Files in htdocs:"
ls -la /usr/local/share/httpd/htdocs
echo "Deleting files in htdocs...."
rm -fr /usr/local/share/httpd/htdocs/*
echo "Copying files to htdocs..."
cp -r ~/MyFiles/code/projects/caret-chomebook-devmode-git/webapp/* /usr/local/share/httpd/htdocs
echo "Files in htdocs:"
ls -la /usr/local/share/httpd/htdocs
```
```
sudo chmod +x /usr/local/bin/deploy-to-httpd.sh
```
```
deploy-to-httpd
```
### Start apache
```
sudo apachectl start
```
### Use a browser to GET the html and js files from the local httpd server
* http://localhost/
