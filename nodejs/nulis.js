new TypeIt('#element', {
  speed: 45
})
.type('Halaman gak jelas ini saha')
.pause(300)
.options({speed: 200})
.delete(2)
.options({speed: 45})
.pause(300)
.type('ya buat karena alasan pengen berak')
.pause(300)
.options({speed: 200})
.delete(12)
.type('hobi saja ')
.pause(300)
.options({speed: 45})
.type('dan sekaligus untuk menghilangkan bosan karena tidak ada kegiatan :)');
