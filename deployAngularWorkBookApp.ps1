Write-Host 'Building  angular-workbook-app...'
npm run build
$folderName = 'angular-work-book-app'
$existingFolder = Get-Item "../$folderName" -ErrorAction 'silentlycontinue'


Write-Host "[$(Get-Date)] Checking if '$folderName' exists in root folder."
if($existingFolder) {
	Write-Host "[$(Get-Date)] Folder exists. Renaming '$folderName' to  '$folderName-old' "
	$existingOldFolder = Get-Item "../$folderName-old" 
	$existingOldFolder
	if($existingOldFolder) {
		Remove-Item "$existingOldFolder" -Recurse -Force
	}
	Rename-Item -Path "../$folderName" -NewName "$folderName-old"
	New-Item "../$folderName" -Type Directory
}

Write-Host "[$(Get-Date)] Copying builds to deployment folder : '$folderName'"
Copy-Item  -Path ".\$folderName\browser\*" -Destination "..\$folderName" -Recurse -Container
Write-Host "[$(Get-Date)] Changing directory to $folderName"
Set-Location "../$folderName"
Write-Host "[$(Get-Date)] Replacing config"
(Get-Content index.html).Replace('<base href="/">', '<base href="/angular-work-book-app/">') | Set-Content index.html

Write-Host "[$(Get-Date)] git init"
git init 
Write-Host "[$(Get-Date)] git add ."
git add .
Write-Host "[$(Get-Date)] git commit -m 'Deploy $(Get-Date)'"
git commit -m "Deploy $(Get-Date)" 
Write-Host "[$(Get-Date)] git remote add origin 'https://github.com/Arunangshu37/angular-work-book-app.git'"
git remote add origin 'https://github.com/Arunangshu37/angular-work-book-app.git'
Write-Host "[$(Get-Date)] git push origin master --force"
git push origin master --force




