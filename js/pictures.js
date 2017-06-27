'use strict';

var PICTURES_GALLERY_SIZE = 25;
var galleryData = [];
var pictureTemplate = document.querySelector('#picture-template')

var randomNumber = function (min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

var randomArrValue = function (array) {
  return Math.floor(Math.random() * array.length);
};

var createGalleryData = function () {
  for (var i = 0; i < PICTURES_GALLERY_SIZE; i++) {
    var comments = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце-концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как-будто их избивают. Как можно было поймать такой неудачный момент?!']

    galleryData[i] = {
      'url': "photos/" + i + ".jpg",
      'likes': randomNumber(15, 200),
      'comments': comments[randomArrValue(comments)]
    }
 }
}();

var createGalleryItem = function (itemData) {
  var galleryItemTemplate = pictureTemplate.cloneNode(true);

  console.log(galleryItemTemplate);
}

for (var i = 0; i < galleryData.length; i++) {
  createGalleryItem(galleryData[i]);
};

var renderGalleryItem = function (itemData) {
  var template = createGalleryItem(itemData);

}


