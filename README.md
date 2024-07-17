# Flygplansfabriken

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Automatic deploy

Github actions using [main.yml](.github/workflows/main.yml) should handle the deployment automatically upon push to master.

## Manually deploy with FTP

If for some reason the automatic deploy doesn't work you can manually update it using this guide.

1. Log in to Loopia and go to [FTP-Konton](https://customerzone.loopia.se/ftp/?popup=1) to find your credentials.
2. If you don't know the password, you can either create a new account or edit one of the existing ones. Just make sure no one else is using that account.
3. Download [FileZilla Client](https://filezilla-project.org/) or a similar tool.
4. Open FileZilla and connect with the credentials from step 1.
    - Host: ftpcluster.loopia.se
    - Username: _See step 1_
    - Password: _See step 1_
    - Port: _Leave empty_
5. Once connected navigate to **public_html** where you should see all the files in the same structure as in [dist/](/dist/).
6. Simply replace the content in **public_html** with the content in your [dist/](/dist/) and the website should be updated immediately.
    - To be safe you can copy the **public_html** to your computer first so you have a backup if the new build doesn't work.
