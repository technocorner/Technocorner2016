$(document).ready(function() {
    var map = new GMaps({
      el: '#gmap',
      lat: -7.7657304,
      lng: 110.3782668,
      zoom: 15,
      scrollwheel: false
    });

    var contentString =
    '<h4>Gedung Jurusan Teknik Elektro dan Teknologi Informasi</h4>' +
    '<ul>' +
        '<li>Lokasi panitia menuntut ilmu</li>'
    '</ul>';
    map.addMarker({
      lat: -7.765973,
      lng: 110.371809,
      title: 'Gedung Jurusan Teknik Elektro dan Teknologi Informasi',
      infoWindow: {
          content: contentString
        }
    });

/*
    contentString =
    '<h4>Gedung Kantor Pusat Fakultas Teknik</h4>' +
    '<ul>' +
        '<li>Lokasi Opening Technocorner 2015</li>' +
        '<li>Lokasi <a href="expo.html" class="link-peta">TechnoExpo</a></li>' +
        '<li>Lokasi Final <a href="eec.html" class="link-peta">Lomba Electro Engineering Competition</a></li>' +
        '<li>Lokasi <a href="sdc.html" class="link-peta">Lomba Software Development Competition</a></li>' +
    '</ul>';
    map.addMarker({
      lat: -7.7653235,
      lng: 110.3722794,
      title: 'Kantor Pusat Fakultas Teknik UGM',
      infoWindow: {
          content: contentString
        }
    });*/
    
    
     contentString =
    '<h4>Gedung Purna Budaya UGM</h4>' +
    '<ul>' +
        '<li>Lokasi Penyisihan <a href="../lf/index.html" class="link-peta">Line Follower</a></li>' +
    '</ul>';
    map.addMarker({
      lat: -7.771979,
      lng: 110.3764895,
      title: 'Gedung Purna Budaya UGM',
      infoWindow: {
          content: contentString
        }
    });
    

    contentString =
    '<h4>Grha Sabha Permana UGM</h4>' +
    '<ul>' +
        '<li>Lokasi <a href="../semnas/index.html" class="link-peta">Seminar Nasional Technocorner</a></li>' +
        '<li>Lokasi <a href="../technoexpo/index.html" class="link-peta">TechnoExpo</a></li>' +
        '<li>Lokasi Final <a href="../eec/index.html" class="link-peta">Electrical  Engineering Competition</a></li>' +
        '<li>Lokasi Penyisihan dan Final <a href="../sdc/index.html" class="link-peta">Software Development Competition</a></li>' +
        '<li>Lokasi Final <a href="../lf/index.html" class="link-peta">Line Follower Competition</a></li>' +
    '</ul>';
    map.addMarker({
      lat: -7.769814,
      lng: 110.377834,
      title: 'Grha Sabha Permana UGM',
      infoWindow: {
          content: contentString
        }
    });
    
 
    map.drawOverlay({
        lat: -7.7653235,
        lng: 110.3722794,
        content: '<div class="overlay">Lokasi Utama</div>'
    });

});