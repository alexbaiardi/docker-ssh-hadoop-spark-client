FROM python:3.13-slim

RUN apt-get update \
&& apt-get install gcc -y \
&& apt-get install git -y \
&& apt-get clean

ENV TZ="Europe/Rome"

# Install fonts to generate charts with matplotlib and latex
RUN echo "deb http://deb.debian.org/debian bookworm contrib non-free" > /etc/apt/sources.list.d/contrib.list
RUN apt-get update
RUN apt-get install -y fonts-dejavu
RUN apt-get install -y ttf-mscorefonts-installer
RUN apt-get install -y texlive-full
RUN rm -rf /var/lib/apt/lists/*

RUN pip install --upgrade pip
ENV PYTHONPATH="/src/:$PATH"
RUN pip freeze

RUN mkdir /src
COPY ./requirements.txt  /src/
RUN pip install -r /src/requirements.txt

EXPOSE 8888