# S3 version download with Nodejs

This is the repository for s3 versioning download, a script for Amazon S3.

The most common use case for this is when you have enabled versioning on an S3 bucket and want to download part or all of the files in the local system.

It takes time to do this with the web interface: The Amazon S3 online administration gui does not provide a method to do this on a massive scale.

With this script, you can simply download a version of a file to the local system by executing a simple command such as:

```
$ node s3-version.js --bucket my-bucket --inputfile input.json --outputDir result
```

## Installing

clone the repository:

```
$ git clone https://github.com/yashijain1998/s3-version.git
```

Go to the repository: 

```
$ cd s3-version
```

Install the packages:

```
$ npm install
```

Run the script:

```
$ node s3-version.js --bucket my-bucket --inputfile input.json --outputDir result
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
usage: node s3-version.js [--bucket BUCKET] [--inputfile INPUT FILE] [--outputDir OUTPUT FOLDER]

required argument:
  --bucket     BUCKET    S3 bucket hosting the files with versioning enabled

optional arguments:
  --inputfile  INPUT FILE      Input file with details of key and corresponding versions to download
  --outputDir  OUTPUT FOLDER   local folder in which the downloaded files are saved
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
  },
  {
    "Key": "folder3/subfolder1/sample2.json",
    "Version": [
      "__MKXwPr5bqJMyxqo9nhg7dm4Oebs3TJ",
      "7g4ucKuNJC9B4l0NE7Kqzf0KQIRbQpZG"
    ]
  }
]
```

## Output
The files will be downloaded and saved to the `ouputdir` folder. Saved file names will be concatenation of specified file name and version. For example, for the input specified in above section, outpt dir will be
```
├─result/
│   │─folder3/
│       │ a-grCvDJcKPkkuF16zz8R2SNLLZ6G6qDCP.txt
│       │ a-ma5Q3QtlDDAotBM171DKFuVli.6GO7UL.txt
│       │─subfolder1/
│           │ sample2-__MKXwPr5bqJMyxqo9nhg7dm4Oebs3TJ.json
│           │ sample2-7g4ucKuNJC9B4l0NE7Kqzf0KQIRbQpZG.json
```

## Application Logs
Application logs will be available in `logs/` folder with file name corresponding to the time of running te script, e.g. `logs/2021-12-20-12-47-53.log`


