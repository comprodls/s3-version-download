# S3 version download with Nodejs

This is the repository for s3 versioning download, a script for Amazon S3.

The most common use case for this is when you have enabled versioning on an S3 bucket and want to download part or all of the files in the local system.

It takes time to do this with the web interface: The Amazon S3 online administration gui does not provide a method to do this on a massive scale.

With this script, you can simply download a version of a file to the local system by executing a simple command such as:

```
$ node index.js -b my-bucket --inputfile input.json --outputfolder result
```

## Installing

clone the repository:

```
$ git clone https://github.com/yashijain1998/s3-download.git
```

Go to the repository: 

```
$ cd s3-download
```

Install the packages:

```
$ npm install
```

Run the script:

```
$ node index.js -b my-bucket --inputfile input.json --outputfolder result
```

## Requirements

  * NodeJs
  * AWS credentials available in the environment
	* This can be accomplished in various ways:
		* Environment Variables:
			* AWS_ACCESS_KEY_ID
			* AWS_SECRET_ACCESS_KEY
			* AWS_DEFAULT_REGION
		* Your `~/.aws/ files`
			* Configured with `aws configure`

## Command line options

```
usage: node index.js [-b BUCKET] [--inputfile INPUT FILE] [--outputfolder OUTPUT FOLDER]

required argument:
  -b   BUCKET    s3 bucket to download from

optional arguments:
  --inputfile     INPUT FILE      AWS S3 key and corresponding versions to download
  --outputfolder  OUTPUT FOLDER   a location to save the downloaded file from AWS S3                
```
## Sample Input

To download versions from AWS S3, you must give a key as well as the versions you want to download.
For your reference, we've included a sample data file 'input.json'.

```
[
  {
    "Key": "folder3/a.txt",
    "Version": [
      "grCvDJcKPkkuF16zz8R2SNLLZ6G6qDCP",
      "ma5Q3QtlDDAotBM171DKFuVli.6GO7UL"
    ]
  }
]
```




