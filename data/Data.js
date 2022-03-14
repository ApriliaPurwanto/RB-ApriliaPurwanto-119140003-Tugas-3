const MASKAPAI = [
    {
      maskapai_id: "M01",
      maskapai_nama: "Garuda", 
      maskapai_logo : require('../image/garuda.jpg'),  
    },
    {
      maskapai_id: "M02",
      maskapai_nama: "Air Asia",
      maskapai_logo: require('../image/airasia.png'),
    },
    {
      maskapai_id: "M03",
      maskapai_nama: "Sriwijaya",
      maskapai_logo: require('../image/sriwijaya.png'),
    },
];

const BANDARA = [
     {
       bandara_id: 'B01',
       bandara_nama: 'Radin Inten', 
     },
     {
       bandara_id: 'B02',
       bandara_nama: 'Halim Perdanakusuma',
     },
     {
       bandara_id: 'B03',
       bandara_nama: 'Ngurah Rai',
     },
];

const JADWAL = [
    {
      jadwal_id: "J01",
      bandara_id_keberangkatan: "B02",
      bandara_id_kedatangan: "B03",
      maskapai_id: "M03",
      tanggal: "2022-03-20",
    },
    {
      jadwal_id: "J02",
      bandara_id_keberangkatan: "B01",
      bandara_id_kedatangan: "B02",
      maskapai_id: "M01",
      tanggal: "2022-03-21",
    },
    {
     jadwal_id: "J03",
     bandara_id_keberangkatan: "B01",
     bandara_id_kedatangan: "B03",
     maskapai_id: "M02",
     tanggal: "2022-03-22",
    },
    {
     jadwal_id: "J04",
     bandara_id_keberangkatan: "B03",
     bandara_id_kedatangan: "B01",
     maskapai_id: "M03",
     tanggal: "2022-03-22",
    },
    {
      jadwal_id: "J05",
      bandara_id_keberangkatan: "B02",
      bandara_id_kedatangan: "B03",
      maskapai_id: "M02",
      tanggal: "2022-03-24",
    },
    {
      jadwal_id: "J06",
      bandara_id_keberangkatan: "B03",
      bandara_id_kedatangan: "B02",
      maskapai_id: "M01",
      tanggal: "2022-03-25",
    },
    {
      jadwal_id: "J07",
      bandara_id_keberangkatan: "B01",
      bandara_id_kedatangan: "B02",
      maskapai_id: "M02",
      tanggal: "2022-03-26",
    },
    {
      jadwal_id: "J08",
      bandara_id_keberangkatan: "B02",
      bandara_id_kedatangan: "B03",
      maskapai_id: "M03",
      tanggal: "2022-03-26",
    },
    {
      jadwal_id: "J09",
      bandara_id_keberangkatan: "B03",
      bandara_id_kedatangan: "B02",
      maskapai_id: "M03",
      tanggal: "2022-03-26",
    },
    {
      jadwal_id: "J10",
      bandara_id_keberangkatan: "B01",
      bandara_id_kedatangan: "B03",
      maskapai_id: "M02",
      tanggal: "2022-03-27",
    },
    {
      jadwal_id: "J11",
      bandara_id_keberangkatan: "B02",
      bandara_id_kedatangan: "B03",
      maskapai_id: "M01",
      tanggal: "2022-04-03",
    },
    {
      jadwal_id: "J12",
      bandara_id_keberangkatan: "B03",
      bandara_id_kedatangan: "B02",
      maskapai_id: "M01",
      tanggal: "2022-04-10",
    },
];

export {MASKAPAI, BANDARA, JADWAL};