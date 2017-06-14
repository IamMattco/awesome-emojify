[![Code Climate](https://codeclimate.com/github/MateuszM/awesome-emojify/badges/gpa.svg)](https://codeclimate.com/github/MateuszM/awesome-emojify) [![Issue Count](https://codeclimate.com/github/MateuszM/awesome-emojify/badges/issue_count.svg)](https://codeclimate.com/github/MateuszM/awesome-emojify)

![alt text](https://raw.githubusercontent.com/MateuszM/awesome-emojify/master/emoji.png "Screen")

# Awesome-emojify
A jQuery plugin to convert Emoji keywords to images

### Installation

```javascript
npm install awesome-emojify
```

### Sample usage

```javascript
$('.awesome-emoji').awesome_emojify();

```
### With options
```javascript
$('.awesome-emoji').awesome_emojify({
  emoticons: { // list of available emoticons
    ':-)'     : 'emoji-1.png',
    ';-)'     : 'emoji-2.png',
    ':-D'     : 'emoji-3.png',
    ':-d'     : 'emoji-3.png',
    ':-o'     : 'emoji-4.png',
    ':-O'     : 'emoji-4.png',
    '<3'      : 'emoji-5.png',
    ':-('     : 'emoji-6.png',
    ':-p'     : 'emoji-7.png',
    ':-P'     : 'emoji-7.png',
    ':-|'     : 'emoji-8.png',
    ':-/'     : 'emoji-8.png',
    ':)'      : 'emoji-1.png',
    ';)'      : 'emoji-2.png',
    ':D'      : 'emoji-3.png',
    ':d'      : 'emoji-3.png',
    ':o'      : 'emoji-4.png',
    ':O'      : 'emoji-4.png',
    ':('      : 'emoji-6.png',
    ':p'      : 'emoji-7.png',
    ':P'      : 'emoji-7.png',
    ':/'      : 'emoji-8.png',
    ':|'      : 'emoji-8.png'
  },
  width: '24px', // width for one emoticon
  height: '24px', // height for one emoticon
  images_path: 'images/', // folder with emoticon images
});

```
