#!/bin/bash

if [ "${CIRCLE_BRANCH}" == "development" ]
then
  echo "export AWS_BUCKET_TARGET=static-sites-sbx" >> $BASH_ENV
  # echo "export AWS_BACKUP_BUCKET=static-sites-sbx/`date +%d-%m-%Y-%H-%M`/" >> $BASH_ENV
  echo "export AWS_CLOUDFRONT=PANDA12" >> $BASH_ENV
elif [ "${CIRCLE_BRANCH}" == "QA" ]
then
  echo "export AWS_BUCKET_TARGET=static-sites-sbx" >> $BASH_ENV
  # echo "export AWS_BACKUP_BUCKET=static-sites-sbx/`date +%d-%m-%Y-%H-%M`/" >> $BASH_ENV
  echo "export AWS_CLOUDFRONT=PANDA12" >> $BASH_ENV
elif [ "${CIRCLE_BRANCH}" == "master" ]
then
  echo "export AWS_BUCKET_TARGET=static-sites-sbx" >> $BASH_ENV
  # echo "export AWS_BACKUP_BUCKET=static-sites-sbx/`date +%d-%m-%Y-%H-%M`/" >> $BASH_ENV
  echo "export AWS_CLOUDFRONT=PANDA12" >> $BASH_ENV
else
  echo "export AWS_BUCKET_TARGET=static-sites-sbx" >> $BASH_ENV
  # echo "export AWS_BACKUP_BUCKET=static-sites-sbx/`date +%d-%m-%Y-%H-%M`/" >> $BASH_ENV
  echo "export AWS_CLOUDFRONT=PANDA12" >> $BASH_ENV
fi

echo "Privacy rules! 😋 Variables set for circleci."

exit 0
