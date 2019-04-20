// 抽奖配置文件


// 定义入场动画时长 ms
var fadeIn = 20000; 

// 定义单个号码飞行到车中间的时间 ms 最小设置为500 否则会印象性能
var flyDuration = 1000; 

// 定义中奖手机号码
var winner = '138锦鲤会员4791'

var flyNumberList = [
  "138****4971",
  "138****3880",
  "136****9396",
  "158****7277",
  "159****6348",
  "186****9937",
  "187****1378",
  "182****3129",
  "135****0619",
  "134****0205",
  "180****0395",
  "133****2687",
  "150****0198",
  "136****5596",
  "189****5825",
  "159****1582",
  "178****5166",
  "180****6177",
  "133****5367",
  "187****6932",
  "152****7793",
  "133****8731",
  "187****3678",
  "181****9892",
  "182****2570",
  "136****9666",
  "139****3837",
  "182****5051",
  "181****5188",
  "136****5850",
  "135****8021",
  "137****3886",
  "137****2621",
  "135****3090",
  "187****0117",
  "159****5789",
  "134****4666",
  "187****2182",
  "147****2043",
  "138****0071",
  "136****7663",
  "158****1532",
  "183****2819",
  "158****6138",
  "188****2539",
  "183****1393",
  "133****6883",
  "181****3008",
  "159****8127",
  "150****3151",
  "137****4270",
  "139****8518",
  "152****9188",
  "137****1896",
  "135****9267",
  "135****1808",
  "182****6075",
  "166****8885",
  "189****1228",
  "159****6599",
  "181****1161",
  "135****3271",
  "139****9687",
  "155****7458",
  "159****4488",
  "187****6977",
  "186****4986",
  "136****3797",
  "138****6561",
  "139****6408",
  "186****0260",
  "138****8226",
  "156****2730",
  "139****9378",
  "185****8883",
  "153****4488",
  "130****2031",
  "185****0711",
  "135****7741",
  "135****7285",
  "152****7653",
  "137****6256",
  "173****4945",
  "159****0328",
  "135****1799",
  "136****0181",
  "138****2700",
  "152****9411",
  "136****3638",
  "150****6981",
  "152****4861",
  "139****6116",
  "185****1047",
  "133****8035",
  "136****5216",
  "131****3049",
  "158****8810",
  "134****5555",
  "186****6407",
  "139****7564",
  "132****6016",
  "158****8935",
  "155****0131",
  "138****5801",
  "177****6769",
  "131****2386",
  "187****9311",
  "156****6896",
  "159****0000",
  "135****0696",
  "182****6966",
  "182****6198",
  "173****6272",
  "189****9932",
  "133****1386",
  "150****8695",
  "182****9999",
  "189****8981",
  "180****9655",
  "137****3832",
  "138****0332",
  "138****8711",
  "139****5515",
  "136****6582",
  "139****5332",
  "157****8599",
  "159****7808",
  "156****3858",
  "177****2321",
  "139****0432",
  "150****3789",
  "137****0567",
  "185****4142",
  "175****2418",
  "133****2588",
  "151****9418",
  "187****1707",
  "182****1969",
  "139****3164",
  "133****7281",
  "130****4433",
  "137****9775",
  "187****5840",
  "150****8297",
  "159****6030",
  "155****7300",
  "188****7518",
  "182****6885",
  "137****9162",
  "159****0125",
  "166****3332",
  "159****7999",
  "135****5238",
  "133****6763",
  "158****7777",
  "158****1580",
  "138****1550",
  "188****4700",
  "188****8030",
  "173****5286",
  "158****2009",
  "177****6665",
  "135****0568",
  "150****3980",
  "135****9569",
  "137****4418",
  "153****0803",
  "139****2473",
  "155****5887",
  "135****0979",
  "158****3105",
  "151****3638",
  "188****1998",
  "133****8870",
  "137****6917",
  "150****3937",
  "137****9543",
  "136****7167",
  "186****8579",
  "138****3006",
  "199****4410",
  "159****2191",
  "134****4277",
  "187****9500",
  "136****7477",
  "138****3696",
  "188****0251",
  "185****1123",
  "159****9988",
  "180****6666",
  "155****7902",
  "139****5434",
  "185****0106",
  "159****9908",
  "151****0919",
  "181****7786",
  "185****2324",
  "133****4877",
  "153****9456",
  "131****8398"
]

// 定义电话号码数组
var drawNumberList = [
  "138锦鲤会员4971",
  "138锦鲤会员3880",
  "136锦鲤会员9396",
  "158锦鲤会员7277",
  "159锦鲤会员6348",
  "186锦鲤会员9937",
  "187锦鲤会员1378",
  "182锦鲤会员3129",
  "135锦鲤会员0619",
  "134锦鲤会员0205",
  "180锦鲤会员0395",
  "133锦鲤会员2687",
  "150锦鲤会员0198",
  "136锦鲤会员5596",
  "189锦鲤会员5825",
  "159锦鲤会员1582",
  "178锦鲤会员5166",
  "180锦鲤会员6177",
  "133锦鲤会员5367",
  "187锦鲤会员6932",
  "152锦鲤会员7793",
  "133锦鲤会员8731",
  "187锦鲤会员3678",
  "181锦鲤会员9892",
  "182锦鲤会员2570",
  "136锦鲤会员9666",
  "139锦鲤会员3837",
  "182锦鲤会员5051",
  "181锦鲤会员5188",
  "136锦鲤会员5850",
  "135锦鲤会员8021",
  "137锦鲤会员3886",
  "137锦鲤会员2621",
  "135锦鲤会员3090",
  "187锦鲤会员0117",
  "159锦鲤会员5789",
  "134锦鲤会员4666",
  "187锦鲤会员2182",
  "147锦鲤会员2043",
  "138锦鲤会员0071",
  "136锦鲤会员7663",
  "158锦鲤会员1532",
  "183锦鲤会员2819",
  "158锦鲤会员6138",
  "188锦鲤会员2539",
  "183锦鲤会员1393",
  "133锦鲤会员6883",
  "181锦鲤会员3008",
  "159锦鲤会员8127",
  "150锦鲤会员3151",
  "137锦鲤会员4270",
  "139锦鲤会员8518",
  "152锦鲤会员9188",
  "137锦鲤会员1896",
  "135锦鲤会员9267",
  "135锦鲤会员1808",
  "182锦鲤会员6075",
  "166锦鲤会员8885",
  "189锦鲤会员1228",
  "159锦鲤会员6599",
  "181锦鲤会员1161",
  "135锦鲤会员3271",
  "139锦鲤会员9687",
  "155锦鲤会员7458",
  "159锦鲤会员4488",
  "187锦鲤会员6977",
  "186锦鲤会员4986",
  "136锦鲤会员3797",
  "138锦鲤会员6561",
  "139锦鲤会员6408",
  "186锦鲤会员0260",
  "138锦鲤会员8226",
  "156锦鲤会员2730",
  "139锦鲤会员9378",
  "185锦鲤会员8883",
  "153锦鲤会员4488",
  "130锦鲤会员2031",
  "185锦鲤会员0711",
  "135锦鲤会员7741",
  "135锦鲤会员7285",
  "152锦鲤会员7653",
  "137锦鲤会员6256",
  "173锦鲤会员4945",
  "159锦鲤会员0328",
  "135锦鲤会员1799",
  "136锦鲤会员0181",
  "138锦鲤会员2700",
  "152锦鲤会员9411",
  "136锦鲤会员3638",
  "150锦鲤会员6981",
  "152锦鲤会员4861",
  "139锦鲤会员6116",
  "185锦鲤会员1047",
  "133锦鲤会员8035",
  "136锦鲤会员5216",
  "131锦鲤会员3049",
  "158锦鲤会员8810",
  "134锦鲤会员5555",
  "186锦鲤会员6407",
  "139锦鲤会员7564",
  "132锦鲤会员6016",
  "158锦鲤会员8935",
  "155锦鲤会员0131",
  "138锦鲤会员5801",
  "177锦鲤会员6769",
  "131锦鲤会员2386",
  "187锦鲤会员9311",
  "156锦鲤会员6896",
  "159锦鲤会员0000",
  "135锦鲤会员0696",
  "182锦鲤会员6966",
  "182锦鲤会员6198",
  "173锦鲤会员6272",
  "189锦鲤会员9932",
  "133锦鲤会员1386",
  "150锦鲤会员8695",
  "182锦鲤会员9999",
  "189锦鲤会员8981",
  "180锦鲤会员9655",
  "137锦鲤会员3832",
  "138锦鲤会员0332",
  "138锦鲤会员8711",
  "139锦鲤会员5515",
  "136锦鲤会员6582",
  "139锦鲤会员5332",
  "157锦鲤会员8599",
  "159锦鲤会员7808",
  "156锦鲤会员3858",
  "177锦鲤会员2321",
  "139锦鲤会员0432",
  "150锦鲤会员3789",
  "137锦鲤会员0567",
  "185锦鲤会员4142",
  "175锦鲤会员2418",
  "133锦鲤会员2588",
  "151锦鲤会员9418",
  "187锦鲤会员1707",
  "182锦鲤会员1969",
  "139锦鲤会员3164",
  "133锦鲤会员7281",
  "130锦鲤会员4433",
  "137锦鲤会员9775",
  "187锦鲤会员5840",
  "150锦鲤会员8297",
  "159锦鲤会员6030",
  "155锦鲤会员7300",
  "188锦鲤会员7518",
  "182锦鲤会员6885",
  "137锦鲤会员9162",
  "159锦鲤会员0125",
  "166锦鲤会员3332",
  "159锦鲤会员7999",
  "135锦鲤会员5238",
  "133锦鲤会员6763",
  "158锦鲤会员7777",
  "158锦鲤会员1580",
  "138锦鲤会员1550",
  "188锦鲤会员4700",
  "188锦鲤会员8030",
  "173锦鲤会员5286",
  "158锦鲤会员2009",
  "177锦鲤会员6665",
  "135锦鲤会员0568",
  "150锦鲤会员3980",
  "135锦鲤会员9569",
  "137锦鲤会员4418",
  "153锦鲤会员0803",
  "139锦鲤会员2473",
  "155锦鲤会员5887",
  "135锦鲤会员0979",
  "158锦鲤会员3105",
  "151锦鲤会员3638",
  "188锦鲤会员1998",
  "133锦鲤会员8870",
  "137锦鲤会员6917",
  "150锦鲤会员3937",
  "137锦鲤会员9543",
  "136锦鲤会员7167",
  "186锦鲤会员8579",
  "138锦鲤会员3006",
  "199锦鲤会员4410",
  "159锦鲤会员2191",
  "134锦鲤会员4277",
  "187锦鲤会员9500",
  "136锦鲤会员7477",
  "138锦鲤会员3696",
  "188锦鲤会员0251",
  "185锦鲤会员1123",
  "159锦鲤会员9988",
  "180锦鲤会员6666",
  "155锦鲤会员7902",
  "139锦鲤会员5434",
  "185锦鲤会员0106",
  "159锦鲤会员9908",
  "151锦鲤会员0919",
  "181锦鲤会员7786",
  "185锦鲤会员2324",
  "133锦鲤会员4877",
  "153锦鲤会员9456",
  "131锦鲤会员8398"
]