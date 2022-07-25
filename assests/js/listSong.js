// ----------- Danh sach bai hat --------------------

const listSongs = [
    {
        id: 0,
        name: "Bắt Cóc Con Tim",
        singer: "Lou Hoàng",
        src: "../../music/Bat Coc Con Tim - Lou Hoang.mp3",
        thumb: "https://data.chiasenhac.com/data/cover/169/168258.jpg",
    },
    {
        id: 1,
        name: "Mãi Mãi Bên Nhau",
        singer: "Noo Phước Thịnh",
        src: "../../music/Mai Mai Ben Nhau - Noo Phuoc Thinh.mp3",
        thumb: "https://data.chiasenhac.com/data/cover/52/51381.jpg",
    },
    {
        id: 2,
        name: "Có Ai Thương Em Như Anh (#Catena)",
        singer: "Tóc Tiên",
        src: "../../music/Co Ai Thuong Em Nhu Anh Catena_ - Toc Ti.mp3",
        thumb: "https://data.chiasenhac.com/data/cover/92/91423.jpg",
    },
    {
        id: 3,
        name: "Em Không Là Duy Nhất",
        singer: "Tóc Tiên",
        src: "../../music/Em Khong La Duy Nhat - Toc Tien.mp3",
        thumb: "https://data.chiasenhac.com/data/cover/70/69183.jpg",
    },
    {
        id: 4,
        name: "Bao Tiền Một Mớ Bình Yên?",
        singer: "14 Casper; Bon",
        src: "../../music/Bao Tien Mot Mo Binh Yen_ - 14 Casper_ B.mp3",
        thumb: "https://data.chiasenhac.com/data/cover/134/133355.jpg",
    },
    {
        id: 5,
        name: "Gác Lại Âu Lo",
        singer: "Da LAB; Miu Lê",
        src: "../../music/Gac Lai Au Lo - Da LAB_ Miu Le.mp3",
        thumb: "https://data.chiasenhac.com/data/cover/125/124649.jpg",
    },
    {
        id: 6,
        name: "Thanh Xuân",
        singer: "Da LAB",
        src: "../../music/Thanh Xuan - Da LAB.mp3",
        thumb: "https://data.chiasenhac.com/data/cover/94/93770.jpg",
    },
    {
        id: 7,
        name: "Một Nhà",
        singer: "Da LAB",
        src: "../../music/Mot Nha - Da LAB.mp3",
        thumb: "https://data.chiasenhac.com/data/cover/35/34197.jpg",
    },
    {
        id: 8,
        name: "Ngày Chưa Giông Bão",
        singer: "Bùi Lan Hương",
        src: "../../music/Ngay Chua Giong Bao - Bui Lan Huong.mp3",
        thumb: "https://data.chiasenhac.com/data/cover/97/96206.jpg",
    },
    {
        id: 9,
        name: "Có Chàng Trai Viết Lên Cây",
        singer: "Phan Mạnh Quỳnh",
        src: "../../music/Co Chang Trai Viet Len Cay - Phan Manh Q.mp3",
        thumb: "https://data.chiasenhac.com/data/cover/81/80748.jpg",
    },
    {
        id: 10,
        name: "Bước Qua Nhau",
        singer: "Vũ",
        src: "../../music/Buoc Qua Nhau - Vu.mp3",
        thumb: "https://data.chiasenhac.com/data/cover/151/150018.jpg",
    },
    {
        id: 11,
        name: "Anh Đếch Cần Gì Nhiều Ngoài Em",
        singer: "Đen; Vũ; Thành Đồng",
        src: "../../music/Anh Dech Can Gi Nhieu Ngoai Em - Den_ Vu.mp3",
        thumb: "https://data.chiasenhac.com/data/cover/98/97369.jpg",
    },
    {
        id: 12,
        name: "Lạ Lùng",
        singer: "Vũ",
        src: "../../music/La Lung - Vu.mp3",
        thumb: "https://data.chiasenhac.com/data/cover/76/75885.jpg",
    },
    {
        id: 13,
        name: "Bước Qua Mùa Cô Đơn",
        singer: "Vũ",
        src: "../../music/Buoc Qua Mua Co Don - Vu.mp3",
        thumb: "https://data.chiasenhac.com/data/cover/133/132452.jpg",
    },
    {
        id: 14,
        name: "Thằng Điên",
        singer: "JustaTee; Phương Ly",
        src: "../../music/Thang Dien - JustaTee_ Phuong Ly.mp3",
        thumb: "https://data.chiasenhac.com/data/cover/96/95803.jpg",
    },
    {
        id: 15,
        name: "Mặt Trời Của Em",
        singer: "Phương Ly; JustaTee",
        src: "../../music/Mat Troi Cua Em - Phuong Ly_ JustaTee.mp3",
        thumb: "https://data.chiasenhac.com/data/cover/79/78549.jpg",
    },
    {
        id: 16,
        name: "Nơi Mình Dừng Chân",
        singer: "Mỹ Tâm",
        src: "../../music/Noi Minh Dung Chan - My Tam.mp3",
        thumb: "https://data.chiasenhac.com/data/cover/100/99800.jpg",
    },
    {
        id: 17,
        name: "Không Sao Mà Em Đây Rồi",
        singer: "Suni Hạ Linh; Lou Hoàng",
        src: "../../music/Khong Sao Ma Em Day Roi - Suni Ha Linh_.mp3",
        thumb: "https://data.chiasenhac.com/data/cover/126/125572.jpg",
    },
    {
        id: 18,
        name: "Tìm Lại Bầu Trời",
        singer: "Tuấn Hưng",
        src: "../../music/Tim Lai Bau Troi - Tuan Hung.mp3",
        thumb: "https://data.chiasenhac.com/data/cover/2/1592.jpg",
    },
    {
        id: 19,
        name: "Nắm Lấy Tay Anh",
        singer: "Tuấn Hưng",
        src: "../../music/Nam Lay Tay Anh - Tuan Hung.mp3",
        thumb: "https://data.chiasenhac.com/data/cover/21/20074.jpg",
    },
];

// export default listSongs;
