# caret-chomebook-devmode-git

Editing HTML and JavaScript on a Chromebook in developer mode running Chromebrew and httpd.

## Notes
* vi doesn't work very well on this Chromebook. I'm using nano instead.

## References
* https://github.com/skycocker/chromebrew
* https://chromium.googlesource.com/chromiumos/docs/+/master/security/noexec_shell_scripts.md
* https://www.linuxquestions.org/questions/slackware-14/make-%27ll%27-to-run-ls-l-4175524018/
* https://askubuntu.com/questions/1033998/what-command-is-the-alias-ll-for
* https://www.androidcentral.com/how-enable-developer-mode-chrome-os


### Switch to developer mode
* Boot your Chromebook into recovery mode by powering off the device, then holding the Esc and Refresh (the circular arrow) keys while pressing the power button.
* Press Ctrl + D on your keyboard when asked to insert recovery media.
* Press Enter to confirm.
* When your device reboots, you'll see a screen stating the OS verification is off. This screen will appear every time you turn the device on to warn you that the device isn't as secure as it would be out of the box. When you see this screen, press Ctrl + D to continue booting, or wait a few seconds and the device will boot on its own.

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
crew install httpd:
```
```
All things HTTPD are in /usr/local/share/httpd.

Pages are stored in /usr/local/share/httpd/htdocs.

To start/stop httpd, execute the following:
sudo apachectl start - starts httpd
sudo apachectl stop - stops httpd

To start httpd on login, execute the following:
echo 'if [ -f /usr/local/bin/apachectl ]; then' >> ~/.bashrc
echo '  sudo /usr/local/bin/apachectl start' >> ~/.bashrc
echo 'fi' >> ~/.bashrc
source ~/.bashrc

To completely remove httpd, perform the following:
crew remove httpd
sudo rm -rf /usr/local/share/httpd
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
