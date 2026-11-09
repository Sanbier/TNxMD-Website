import { Game } from "@/types/game";

export const DEFAULT_CONTACT_CHANNELS = {
  telegram: "https://t.me/tnxmd",
  zalo: "https://zalo.me/g/d4xyfuzgvavdgjdjhpun",
  facebook: "https://facebook.com/tnxmd.gaming",
};

export const GAMES: Game[] = [
  {
    "id": "soul-knight-prequel",
    "slug": "soul-knight-prequel",
    "title": "Kỵ Sĩ Nguyên Khí Tiền Truyện",
    "category": "Di động",
    "genre": "Nhập Vai Hành Động ARPG Pixel",
    "platforms": [
      "iOS",
      "iPadOS"
    ],
    "shortDescription": "Phiêu lưu hành động ARPG pixel đỉnh cao trong thế giới Soul Knight với bộ công cụ chiến đấu toàn diện, auto dungeon Pandora, loot đồ đỏ và tối ưu đồ họa.",
    "fullDescription": "Kỵ Sĩ Nguyên Khí Tiền Truyện (Soul Knight Prequel) đưa người chơi vào thế giới pixel hoài cổ đầy cuốn hút với lối chơi cày cuốc ARPG chặt chém thời gian thực. Bản tích hợp cao cấp hỗ trợ đầy đủ 6 phân hệ tính năng: từ bất tử, no CD, one hit, tùy chỉnh sát thương đến tự động tele, auto đánh, tự nhặt trang bị Thái Cổ/Viễn Cổ/Tai Họa, vượt ải Pandora cấp tốc và công cụ tối ưu FPS mượt mà cho mọi dòng máy iOS.",
    "coverImage": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/3e/1a/77/3e1a771e-f679-4d71-5140-b89060b34f4c/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    "bannerImage": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/1a/6a/f9/1a6af976-cbd5-bf1f-121b-2ddf7c1435bb/ios_2796_1290__U82f1.jpg/320x480bb.jpg",
    "gallery": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/1a/6a/f9/1a6af976-cbd5-bf1f-121b-2ddf7c1435bb/ios_2796_1290__U82f1.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/e9/22/46/e922460d-de1b-8bcf-99b5-f0c02e68bb9f/1.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/f6/5b/81/f65b81d1-82b5-e3d9-5b67-cbffe46aee44/2.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/bb/97/4a/bb974aa6-8ae7-7866-783c-23f20f24e414/3.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/d5/62/1d/d5621d57-94fa-96ff-c27b-d3c603184440/6.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/49/cb/40/49cb40a8-5f11-2b40-8da5-9de335869d57/4.jpg/320x480bb.jpg"
    ],
    "isHot": true,
    "rating": 4.9,
    "version": "v1.13.0",
    "releaseDate": "Mới Cập Nhật",
    "developer": "ChillyRoom Inc. / Banking Technology",
    "status": "HOT",
    "features": [
      "Chiến Đấu: Bất Tử, No CD, Tầm Đánh Toàn Màn Hình, Vô Hạn Mana",
      "Chiến Đấu: Tùy Chỉnh Mức Dame, One Hit 1 HP, Tốc Đánh x100.0, Tốc Chạy x2.0, Tốc Game x2.0",
      "Tự Động: Tự Tele Độc Lập (30ms), Tự Diệt Toàn Bộ Quái MAX Độc Lập",
      "Tự Động: Tự Đánh (Nhịp 120ms, Giữ 40ms), Tự Xuất Kỹ Năng (Nhịp 2.0s)",
      "Tự Động: Tự Nhặt & Bộ Lọc Loot Thông Minh (Chỉ Thu Thập Đồ Cam + Đỏ)",
      "Tự Động: Phân Loại Cao Cấp Chỉ Loot Trang Bị Viễn Cổ / Thái Cổ / Tai Họa & Lưu Cài Đặt",
      "Dungeon: Hiển Thị Quái Vật, Bộ Lọc Chỉ Hiện Boss, Tự Động Vượt Ải Nhanh (Pandora Lv6 1–1000 Lượt)",
      "Dungeon: Tùy Chỉnh Trễ Dungeon (20.8s), Hỗ Trợ Map Thường (Đồng Cỏ Phía Nam), Tự Vào Map",
      "Dungeon: Auto Bug Logic 2 (1–1000 Boss, Delay 0.1s), Auto Pandora & Auto Pandora VIP",
      "Dungeon: Di Chuyển Xuyên Tường (Noclip), Dừng Sương Mù & Xóa Toàn Bộ Sương Che",
      "Setup Duyên: Tự Thu Thập Duyên Thường, Kỹ Năng Duyên, Duyên Trong Mơ, Lọc Phẩm Cấp (Lam, Cam, Đỏ)",
      "Setup Duyên: Quét Bộ Nhớ Danh Sách Duyên Thực Thời, Thu Thập Duyên Tai Họa 4 Ô Độc Quyền",
      "Tối Ưu: Tự Động Theo Cấu Hình Máy, Chế Độ Máy Yếu, Giảm Render (0.6), Giảm Texture, Xóa Map, Ẩn Quái",
      "Tối Ưu: Preset Wave Lớn (Low + 55% + 30 FPS + Mid1 + Ẩn), Kiểm Tra Sửa Lag, Quản Lý Hook Log & Log Vàng",
      "Phòng Lab: Xả Trang Bị Scene Thực Tế, Tùy Biến Chu Kỳ Nguyên Liệu, Thử Nghiệm Số Lượng 999,999"
    ],
    "systemRequirements": {
      "os": "iOS 13.0 trở lên / iPadOS 13.0+",
      "processor": "Apple A11 Bionic trở lên",
      "memory": "Tối thiểu 3 GB RAM",
      "graphics": "Apple GPU tích hợp Metal",
      "storage": "Tối thiểu 3.5 GB dung lượng trống"
    },
    "contactUrl": "https://apps.apple.com/vn/app/k%E1%BB%B5-s%C4%A9-nguy%C3%AAn-kh%C3%AD-ti%E1%BB%81n-truy%E1%BB%87n/id6742478967?l=vi",
    "contactChannels": {
      "telegram": "https://t.me/tnxmd",
      "zalo": "https://zalo.me/g/d4xyfuzgvavdgjdjhpun",
      "facebook": "https://facebook.com/tnxmd.gaming"
    },
    "tags": [
      "Soul Knight",
      "ARPG",
      "Pixel Art",
      "Chiến Đấu",
      "Auto Loot",
      "Pandora VIP",
      "Setup Duyên",
      "Tối Ưu FPS"
    ],
    "views": "112.4K"
  },
  {
    "id": "fish-eat-fish",
    "slug": "fish-eat-fish",
    "title": "Fish Eat Fish (Cá Lớn Nuốt Cá Bé)",
    "category": "Di động",
    "genre": "Hành Động Sinh Tồn IO Đáy Biển",
    "platforms": [
      "iOS",
      "iPadOS"
    ],
    "shortDescription": "Tựa game sinh tồn cá lớn nuốt cá bé kinh điển với tính năng Freeshop mở khóa toàn bộ cá hiếm, tăng cấp thần tốc và tăng cường sát thương săn mồi.",
    "fullDescription": "Fish Eat Fish.io: Hunger Games đưa bạn vào đại dương sâu thẳm trong cuộc chiến sinh tồn cá lớn nuốt cá bé không khoan nhượng. Bản tích hợp đem đến trải nghiệm đỉnh cao với Freeshop mở khóa mọi loài cá và skin đại dương, đẩy nhanh tốc độ tăng cấp tiến hóa và khuếch đại sát thương săn mồi áp đảo toàn bộ đối thủ.",
    "coverImage": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/7d/3b/32/7d3b3219-be6c-867d-4f64-7ea4db9da562/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    "bannerImage": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/54/78/a1/5478a1fd-7c6d-b0af-02b4-f0f3a69fed35/f19525cf-c74b-4208-8d6d-4692b3229b72__U7ecf_U5178_U73a9_U6cd5__U5927_U9c7c_U5403_U5c0f_U9c7c_.jpg/406x228bb.jpg",
    "gallery": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/54/78/a1/5478a1fd-7c6d-b0af-02b4-f0f3a69fed35/f19525cf-c74b-4208-8d6d-4692b3229b72__U7ecf_U5178_U73a9_U6cd5__U5927_U9c7c_U5403_U5c0f_U9c7c_.jpg/406x228bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/6d/33/7e/6d337e56-3705-e915-03d6-4fc3a37e79ce/3b5c778e-ce2c-4181-b0ee-9f70abd2e5d0__U8da3_U5473_U6536_U96c6__U4e86_U89e3_U5404_U79cd_U9c7c_U7c7b.jpg/406x228bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/12/92/77/129277b3-72a0-12ad-c981-081318f44111/73596611-e821-45a2-88af-ae3f8b9b569a__U541e_U98df_U8fdb_U5316__U6210_U4e3a_U9876_U5c16_U63a0_U98df_U8005.jpg/406x228bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/73/eb/7c/73eb7cc0-a835-5667-41e1-3f7d404dd2a2/3eaca2f7-311f-4ced-9caa-bd921306147b__U5168_U7403_U6d77_U57df__U968f_U610f_U63a2_U7d22_U6f2b_U6e38.jpg/406x228bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/64/e0/32/64e03221-46ea-f53c-a194-73bc6a791288/70af6415-5142-4ae6-83b7-858789c55697__U5168_U7403_U9c7c_U7c7b__U6280_U80fd_U5404_U4e0d_U540c.jpg/406x228bb.jpg"
    ],
    "isHot": false,
    "rating": 4.8,
    "version": "v1.1.36",
    "releaseDate": "Mới Cập Nhật",
    "developer": "MOBIBRAIN TECHNOLOGY PTE. LTD.",
    "status": "Mới Cập Nhật",
    "features": [
      "Mua Sắm Miễn Phí Cửa Hàng (Freeshop Toàn Bộ Gói)",
      "Tăng Cấp Cực Nhanh (Fast Level Up & Tiến Hóa Thần Tốc)",
      "Khuếch Đại Sát Thương Săn Mồi (Dame Siêu Cấp)",
      "Mở Khóa Toàn Bộ Loài Cá Hiếm & Trang Phục Biển Độc Quyền",
      "Bảo Vệ Kết Nối Trực Tuyến & Ổn Định FPS"
    ],
    "systemRequirements": {
      "os": "iOS 12.0 trở lên / iPadOS 12.0+",
      "processor": "Apple A10 Fusion trở lên",
      "memory": "Tối thiểu 2 GB RAM",
      "graphics": "Apple GPU tích hợp Metal",
      "storage": "Tối thiểu 1 GB dung lượng trống"
    },
    "contactUrl": "https://apps.apple.com/vn/app/fish-eat-fish-io-hunger-games/id6453700466?l=vi",
    "contactChannels": {
      "telegram": "https://t.me/tnxmd",
      "zalo": "https://zalo.me/g/d4xyfuzgvavdgjdjhpun",
      "facebook": "https://facebook.com/tnxmd.gaming"
    },
    "tags": [
      "Fish Eat Fish",
      "Cá Lớn Nuốt Cá Bé",
      "Sinh Tồn IO",
      "Freeshop",
      "Tăng Cấp",
      "Sát Thương",
      "Mobile"
    ],
    "views": "45.8K"
  },
  {
    "id": "mini-world-royale",
    "slug": "mini-world-royale",
    "title": "Mini World Royale",
    "category": "Di động",
    "genre": "Bắn Súng Sinh Tồn 3D",
    "platforms": [
      "iOS",
      "iPadOS"
    ],
    "shortDescription": "Đấu trường sinh tồn phong cách Mini World sống động trên iOS với hệ thống ngắm bắn và định vị quang học nâng cao.",
    "fullDescription": "Mini World Royale mang thế giới khối hộp độc đáo vào đấu trường sinh tồn kịch tính. Người chơi tham gia các trận chiến thời gian thực, thu thập trang bị và sinh tồn giữa hàng chục đối thủ trên nền tảng iOS.",
    "coverImage": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/e6/db/35/e6db3559-bfa7-081c-7210-329187a8dc2b/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    "bannerImage": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/5e/c8/5b/5ec85be0-3bd1-a464-2928-5476ae82becf/A_U0309NH_1_VI.png/320x480bb.jpg",
    "gallery": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/5e/c8/5b/5ec85be0-3bd1-a464-2928-5476ae82becf/A_U0309NH_1_VI.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/a1/47/56/a1475661-fd50-9a77-7ff3-799095e32d39/A_U0309NH_2_VI.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/d8/e5/c5/d8e5c5bc-5b0d-0a3f-19cd-e281c70934e7/2.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/94/87/57/94875755-1911-7a05-e164-a5240e5343c7/_U538b_U7f29.png/320x480bb.jpg"
    ],
    "isHot": true,
    "rating": 4.9,
    "version": "v1.0.71",
    "releaseDate": "Mới Cập Nhật",
    "developer": "Hainan Mengxing Technology Co.,Ltd",
    "status": "HOT",
    "features": [
      "Tự Dẫn Đạn Chuẩn Xác (Không Xoay Màn Hình)",
      "Tự Xoay Tâm Ngắm (Tự Động Khóa Mục Tiêu)",
      "Kiểm Tra Vật Cản Thực (Không Khóa Xuyên Tường)",
      "Ưu Tiên Khóa Đầu 100% & Tùy Chỉnh Cao Độ Tâm",
      "Tùy Chỉnh Bán Kính Vòng Ngắm (FOV) & Độ Nhạy Tâm",
      "Độ Giật 0% & Chuẩn Tâm Tuyệt Đối 100%",
      "Tăng Tốc Độ Di Chuyển (Speed Boost Lên Đến x5)",
      "Nhảy Cao Siêu Cấp (Jump High Tùy Chỉnh x10)",
      "Hiển Thị Khung Định Vị ESP, Tia Radar, Thanh Máu & Cự Ly (1000m)",
      "Phân Biệt Màu Mục Tiêu: Lộ Diện (Đỏ) / Sau Tường (Cam) / Đồng Đội (Xanh)",
      "Dựng Khung Xương 3D Chuẩn (15 Khớp Động)",
      "Tùy Chọn Ẩn/Hiện Hiển Thị Đồng Đội"
    ],
    "systemRequirements": {
      "os": "iOS 13.0 trở lên / iPadOS 13.0+",
      "processor": "Apple A11 Bionic trở lên",
      "memory": "Tối thiểu 3 GB RAM",
      "graphics": "Apple GPU tích hợp Metal",
      "storage": "Tối thiểu 3 GB dung lượng trống"
    },
    "contactUrl": "https://apps.apple.com/vn/app/mini-world-royale/id6736969466",
    "contactChannels": {
      "telegram": "https://t.me/tnxmd",
      "zalo": "https://zalo.me/g/d4xyfuzgvavdgjdjhpun",
      "facebook": "https://facebook.com/tnxmd.gaming"
    },
    "tags": [
      "Mini World",
      "Sinh Tồn",
      "Shooter",
      "iOS Exclusive"
    ],
    "views": "64.2K"
  },
  {
    "id": "dau-nho-noi-gian",
    "slug": "dau-nho-noi-gian",
    "title": "Đậu Nhỏ Nổi Giận",
    "category": "Di động",
    "genre": "Chiến Thuật Thủ Thành",
    "platforms": [
      "iOS",
      "iPadOS"
    ],
    "shortDescription": "Tựa game thủ thành chiến thuật bảo vệ thành lũy vui nhộn với đồ họa sống động và hệ thống hợp nhất đậu độc đáo trên iOS.",
    "fullDescription": "Đậu Nhỏ Nổi Giận đưa người chơi vào các trận chiến phòng thủ căng thẳng trước làn sóng quái vật. Hợp nhất, nâng cấp các giống đậu chiến binh và triển khai kỹ năng tối thượng để giữ vững căn cứ.",
    "coverImage": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/18/95/54/189554fb-f695-1003-b43f-7f9c51edf044/AppIcon-0-0-1x_U007epad-0-1-85-220.jpeg/512x512bb.jpg",
    "bannerImage": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/32/f8/21/32f821f9-e80c-3506-969e-d82fa15c11e1/01.jpg/320x480bb.jpg",
    "gallery": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/32/f8/21/32f821f9-e80c-3506-969e-d82fa15c11e1/01.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/86/bc/47/86bc4704-f33e-bf8b-4040-2b6c0b8c69de/02.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/3a/c2/37/3ac237e2-60a9-76dd-7422-59ebd33bf88d/03.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/4b/c8/da/4bc8da9f-216c-f496-c89a-227910c7e734/04.jpg/320x480bb.jpg"
    ],
    "isHot": true,
    "rating": 4.8,
    "version": "v1.0",
    "releaseDate": "Mới Cập Nhật",
    "developer": "CMN VIETNAM ONLINE JOINT STOCK COMPANY",
    "status": "HOT",
    "features": [
      "Hạ Địch 1 Chạm (One-Hit KO)",
      "Khuếch Đại Hệ Số Sát Thương Đột Phá",
      "Hệ Số Tỉ Lệ Đòn Đánh Chí Mạng",
      "Bất Tử Thành Lũy & Căn Cứ Phòng Thủ",
      "Tự Động Hồi Sinh Miễn Phí",
      "Phạm Vi Tấn Công Toàn Bộ Bản Đồ",
      "Đóng Băng Toàn Bộ Làn Sóng Quái Vật",
      "Làm Chậm Tốc Độ Di Chuyển Quái (80%)",
      "Dọn Sạch Toàn Bộ Quái Trên Màn Hình",
      "Thắng Nhanh Màn Chơi Hiện Tại",
      "Kỹ Năng & Hồi Chiêu Đậu 0 Giây",
      "Tăng Cấp Sao Toàn Bộ Đậu (+1 Star)",
      "Mở Khóa Toàn Bộ Ô Trồng Cây",
      "Luôn Cho Phép Hợp Nhất Không Giới Hạn",
      "Triển Khai Đậu Miễn Phí (0 Nắng Tiêu Thụ)",
      "Tăng Tốc Trận Đấu Mượt Mà",
      "Tùy Chỉnh Mức Tốc Độ Trận Đấu",
      "Khuếch Đại Hệ Số Kinh Nghiệm (EXP)",
      "Lên Cấp Lập Tức Chọn Thẻ Kỹ Năng",
      "Mở Khóa Vòng Quay May Mắn",
      "Mở Cửa Hàng Ánh Nắng Tự Do",
      "Mở Khóa Toàn Bộ Đặc Quyền & Bỏ Qua Quảng Cáo"
    ],
    "systemRequirements": {
      "os": "iOS 12.0 trở lên / iPadOS 12.0+",
      "processor": "Apple A10 Fusion trở lên",
      "memory": "Tối thiểu 2 GB RAM",
      "graphics": "Apple GPU tích hợp Metal",
      "storage": "Tối thiểu 2 GB dung lượng trống"
    },
    "contactUrl": "https://apps.apple.com/vn/app/%C4%91%E1%BA%ADu-nh%E1%BB%8F-n%E1%BB%95i-gi%E1%BA%ADn/id6792679853?l=vi",
    "contactChannels": {
      "telegram": "https://t.me/tnxmd",
      "zalo": "https://zalo.me/g/d4xyfuzgvavdgjdjhpun",
      "facebook": "https://facebook.com/tnxmd.gaming"
    },
    "tags": [
      "Đậu Nhỏ",
      "Thủ Thành",
      "Chiến Thuật",
      "iOS Exclusive"
    ],
    "views": "49.5K"
  },
  {
    "id": "thu-cung-bao-dan",
    "slug": "thu-cung-bao-dan",
    "title": "Thú Cưng Bão Đạn",
    "category": "Di động",
    "genre": "Bắn Súng Đạn Mạc / Roguelite",
    "platforms": [
      "iOS",
      "iPadOS"
    ],
    "shortDescription": "Chiến trường bắn súng bão đạn cuồng nhiệt kết hợp dàn thú cưng đáng yêu và lối chơi Roguelite gây nghiện trên iOS.",
    "fullDescription": "Thú Cưng Bão Đạn đưa bạn vào các hầm ngục bão đạn rực lửa. Điều khiển pet cưng, phối hợp kỹ năng nguyên tố và càn quét các đợt boss khổng lồ với tốc độ khung hình cao trên iPhone và iPad.",
    "coverImage": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/96/9a/ef/969aef23-20f2-988e-2cf8-3d5f7f1f697b/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    "bannerImage": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/c5/96/d1/c596d1e2-5f02-b202-f769-0460823fd08a/1-KV-1242x2688.jpg/320x480bb.jpg",
    "gallery": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/c5/96/d1/c596d1e2-5f02-b202-f769-0460823fd08a/1-KV-1242x2688.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/3d/62/ac/3d62ac87-2cdd-8167-077a-4179bb524947/2-_U75db_U5feb_U7684_U6218_U6597-2688.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/20/b7/ff/20b7ff50-826e-3604-f280-52e03f2b0830/3-_U5ba0_U7269_U8fdb_U5316-2688.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/cb/c0/19/cbc0196e-b9f5-66e7-846d-fffb6b2f7832/4-_U8fd0_U6c14_U002b_U9009_U62e9-2688.jpg/320x480bb.jpg"
    ],
    "isHot": true,
    "rating": 4.8,
    "version": "v1.0.9",
    "releaseDate": "Mới Cập Nhật",
    "developer": "Valar Technology Joint Stock Company",
    "status": "HOT",
    "features": [
      "Tùy Chỉnh Hệ Số Sát Thương Đột Phá",
      "Khóa Máu Bất Tử Tuyệt Đối",
      "Vô Hạn Băng Đạn & Nạp Đạn Tức Thì",
      "Kỹ Năng Không Hồi Chiêu (0s Cooldown)",
      "Tự Động Quét Sạch Quái Trận Đấu",
      "Loại Bỏ Hoàn Toàn Quảng Cáo",
      "Sự Kiện Cổ Bảo Thám Hiểm: Tự Động Định Vị Vị Trí Cổ Bảo"
    ],
    "systemRequirements": {
      "os": "iOS 13.0 trở lên / iPadOS 13.0+",
      "processor": "Apple A11 Bionic trở lên",
      "memory": "Tối thiểu 3 GB RAM",
      "graphics": "Apple GPU tích hợp Metal",
      "storage": "Tối thiểu 2.5 GB dung lượng trống"
    },
    "contactUrl": "https://apps.apple.com/vn/app/th%C3%BA-c%C6%B0ng-b%C3%A3o-%C4%91%E1%BA%A1n/id6762122743?l=vi",
    "contactChannels": {
      "telegram": "https://t.me/tnxmd",
      "zalo": "https://zalo.me/g/d4xyfuzgvavdgjdjhpun",
      "facebook": "https://facebook.com/tnxmd.gaming"
    },
    "tags": [
      "Thú Cưng Bão Đạn",
      "Roguelite",
      "Bắn Súng",
      "iOS Exclusive"
    ],
    "views": "42.1K"
  },
  {
    "id": "thanh-dia-afk",
    "slug": "thanh-dia-afk",
    "title": "Thánh Địa AFK",
    "category": "Di động",
    "genre": "Nhập Vai Chiến Thuật Nhàn Rỗi",
    "platforms": [
      "iOS",
      "iPadOS"
    ],
    "shortDescription": "Siêu phẩm nhập vai chiến thuật đồ họa tranh vẽ kinh điển từ Lilith Games với các trận chiến nhàn rỗi đỉnh cao trên iOS.",
    "fullDescription": "Thánh Địa AFK (AFK Arena) kết hợp chiều sâu chiến thuật và cơ chế tăng trưởng tự động. Chiêu mộ hàng trăm tướng thần thoại, xây dựng đội hình khắc chế và chinh phục đấu trường Esperia trên iOS.",
    "coverImage": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/ff/5b/a4/ff5ba4c2-984c-9d1a-44b4-b4be408c12ae/AppIcon-vn-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    "bannerImage": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/ea/17/89/ea17896b-c33e-2357-6341-b00fc8abd41c/1.jpg/320x480bb.jpg",
    "gallery": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/ea/17/89/ea17896b-c33e-2357-6341-b00fc8abd41c/1.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/23/4f/84/234f8480-b407-8273-9bb0-de5e1ab9e682/2.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/a0/35/0c/a0350cfb-30ed-6aab-5e46-40bbb3b90283/3.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/e3/d8/fa/e3d8faa6-be60-9b5c-faeb-39c3f6534725/4.jpg/320x480bb.jpg"
    ],
    "isHot": true,
    "rating": 4.9,
    "version": "v1.206.01",
    "releaseDate": "Mới Cập Nhật",
    "developer": "Gzone Publisher Vietnam Company Limited",
    "status": "HOT",
    "features": [
      "Bất Tử & Luôn Khóa Đầy Năng Lượng (HP/MP 100%)",
      "Hồi Chiêu Kỹ Năng Tức Thì (Xóa Bỏ Thời Gian Chờ)",
      "Hiển Thị Thông Số Trận Đấu & Mở Khóa 60 FPS",
      "Bỏ Qua Toàn Bộ Video Quảng Cáo Nhận Thưởng",
      "Tùy Chỉnh Hệ Số Tốc Độ Trận Đấu",
      "Tăng Tốc Độ Di Chuyển Nhân Vật",
      "Tùy Biến Thông Số Sát Thương Trận Đấu",
      "100% Đòn Bạo Kích & Xuyên Giáp / Kháng Phép Tuyệt Đối",
      "Né Đòn 100% & Bách Phát Bách Trúng",
      "Miễn Nhiễm Hiệu Ứng Khống Chế & Tự Giải Debuff",
      "Tăng Tốc Đánh & Tốc Độ Xuất Chiêu Kỹ Năng",
      "Hạ Sinh Lực Phe Địch Còn 1 HP & Phá Vỡ Mọi Lá Chắn"
    ],
    "systemRequirements": {
      "os": "iOS 12.0 trở lên / iPadOS 12.0+",
      "processor": "Apple A11 Bionic trở lên",
      "memory": "Tối thiểu 3 GB RAM",
      "graphics": "Apple GPU tích hợp Metal",
      "storage": "Tối thiểu 4 GB dung lượng trống"
    },
    "contactUrl": "https://apps.apple.com/vn/app/th%C3%A1nh-%C4%91%E1%BB%8Ba-afk/id1632864098",
    "contactChannels": {
      "telegram": "https://t.me/tnxmd",
      "zalo": "https://zalo.me/g/d4xyfuzgvavdgjdjhpun",
      "facebook": "https://facebook.com/tnxmd.gaming"
    },
    "tags": [
      "Thánh Địa AFK",
      "AFK Arena",
      "Chiến Thuật",
      "iOS Exclusive"
    ],
    "views": "77.4K"
  },
  {
    "id": "lien-quan-mobile",
    "slug": "lien-quan-mobile",
    "title": "Garena Liên Quân Mobile",
    "category": "Di động",
    "genre": "Đấu Trường Chiến Thuật MOBA 5v5",
    "platforms": [
      "iOS",
      "iPadOS"
    ],
    "shortDescription": "Đấu trường MOBA 5v5 số 1 Việt Nam trên nền tảng iOS với đồ họa ProMotion 120 FPS và thao tác điều khiển mượt mà.",
    "fullDescription": "Garena Liên Quân Mobile khẳng định vị thế đỉnh cao Esports di động. Hơn 110 tướng chiến thuật với bộ kỹ năng độc nhất, liên tục cập nhật mùa giải mới và các đấu trường xếp hạng khốc liệt trên iPhone và iPad.",
    "coverImage": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/5c/2a/f4/5c2af473-1c0e-e7cc-a3ad-d06c442c1b0b/AppIcon-1x_U007emarketing-0-11-0-85-220-0.png/512x512bb.jpg",
    "bannerImage": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/63/fa/bf/63fabfdf-cdaa-1d6a-d9c5-df41c151e21b/1.jpg/406x228bb.jpg",
    "gallery": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/63/fa/bf/63fabfdf-cdaa-1d6a-d9c5-df41c151e21b/1.jpg/406x228bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/81/ca/83/81ca83ab-27ad-5964-d4c3-f793086ea48b/2.png/406x228bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/b5/1c/4f/b51c4f67-c03c-e23f-d3a6-8c0467a87c4a/3.jpg/406x228bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/23/16/f9/2316f9ac-c387-5d76-98bd-3859f16847d3/4.png/406x228bb.png"
    ],
    "isHot": true,
    "rating": 4.9,
    "version": "v1.64.1.11",
    "releaseDate": "Mùa Giải Mới",
    "developer": "Vietnam Esports and Entertainment Joint Stock Company",
    "status": "HOT",
    "features": [
      "Mở Rộng Bản Đồ Toàn Cảnh (Góc Nhìn Radar Chiến Thuật)",
      "Định Vị Tầm Nhìn Thực (Hiển Thị Vị Trí Tướng Địch & Rừng)",
      "Hỗ Trợ Tự Động: Tốc Biến, Bộc Phá, Bổ Trợ Chuẩn Xác",
      "Tự Động Bán Đồ Khi Đổi Trang Bị (Quick Swap)",
      "Tự Động Khóa Chiêu Thức Định Hướng Ưu Tiên",
      "Mod Full Skin 3S Đầy Đủ Hiệu Ứng (Tối Ưu Ổn Định Theo Máy)",
      "Kiểm Tra Tố Cáo Sau Trận Đấu",
      "Tùy Chọn Chế Độ Hỗ Trợ Đấu Trận Thân Thiện",
      "Module Bảo Vệ Tài Khoản Kín & Ẩn Chữ Ký An Toàn"
    ],
    "systemRequirements": {
      "os": "iOS 13.0 trở lên / iPadOS 13.0+",
      "processor": "Apple A12 Bionic trở lên (iPhone XS trở lên)",
      "memory": "Tối thiểu 3 GB RAM (Khuyên dùng 4 GB+)",
      "graphics": "Apple 4-Core GPU tích hợp Metal",
      "storage": "Tối thiểu 10 GB dung lượng trống"
    },
    "contactUrl": "https://apps.apple.com/vn/app/garena-li%C3%AAn-qu%C3%A2n-mobile/id1150288115",
    "contactChannels": {
      "telegram": "https://t.me/tnxmd",
      "zalo": "https://zalo.me/g/d4xyfuzgvavdgjdjhpun",
      "facebook": "https://facebook.com/tnxmd.gaming"
    },
    "tags": [
      "Liên Quân Mobile",
      "AOV",
      "MOBA 5v5",
      "iOS Exclusive"
    ],
    "views": "112.5K"
  },
  {
    "id": "mech-war",
    "slug": "mech-war",
    "title": "Mech Wars - Online Robot Battles",
    "category": "Di động",
    "genre": "Bắn Súng Robot Đấu Trường 3D",
    "platforms": [
      "iOS",
      "iPadOS"
    ],
    "shortDescription": "Chiến trường đại chiến robot cơ giới 6v6 hoành tráng với hỏa lực tối tân và hiệu ứng đồ họa 3D sống động trên iOS.",
    "fullDescription": "Mech Wars đưa bạn vào buồng lái của các chiến binh robot vũ trang hạng nặng. Nâng cấp vũ khí, tùy biến hỏa lực tầm xa và thống trị các đấu trường sinh tử nhiều người chơi trên iPhone và iPad.",
    "coverImage": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/04/d8/11/04d81160-faa9-01fd-8620-3bf47549fc6c/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    "bannerImage": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/20/16/c8/2016c8a0-c7a1-873c-c0e0-42afe55f79df/3.png/320x480bb.jpg",
    "gallery": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/20/16/c8/2016c8a0-c7a1-873c-c0e0-42afe55f79df/3.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/8c/a9/0b/8ca90bc0-a4d5-ca42-73aa-ede439ebb611/4.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/4c/3d/e7/4c3de7ad-e945-4037-b1e7-0d03a84c1389/5.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/bf/19/3c/bf193c7b-b932-d3db-14ce-16b564f30b6b/1.png/320x480bb.jpg"
    ],
    "isHot": true,
    "rating": 4.8,
    "version": "v1.490.004",
    "releaseDate": "Mới Cập Nhật",
    "developer": "MOMEND GAMES TEKNOLOJI ANONIM SIRKETI",
    "status": "HOT",
    "features": [
      "Bất Tử Khóa Giáp & Máu Robot",
      "Kỹ Năng Hỏa Lực Không Hồi Chiêu (0s Cooldown)",
      "Hồi Sinh Nhanh Tức Thì",
      "Bay Tự Do Không Tiêu Tốn Nhiên Liệu",
      "Hỏa Lực Bắn Liên Tục Không Bị Quá Nhiệt Nòng",
      "Tăng Tốc Độ Bay & Cơ Động Di Chuyển",
      "Tùy Biến Tài Nguyên Hợp Lệ (Vàng, Bạc, Vé Ticket...)",
      "Mở Khóa Tiến Trình BattlePass",
      "Mở Khóa Trải Nghiệm Robot & Vũ Khí Toàn Bộ Sảnh"
    ],
    "systemRequirements": {
      "os": "iOS 13.0 trở lên / iPadOS 13.0+",
      "processor": "Apple A11 Bionic trở lên",
      "memory": "Tối thiểu 3 GB RAM",
      "graphics": "Apple GPU tích hợp Metal",
      "storage": "Tối thiểu 3 GB dung lượng trống"
    },
    "contactUrl": "https://apps.apple.com/us/app/id1450397793",
    "contactChannels": {
      "telegram": "https://t.me/tnxmd",
      "zalo": "https://zalo.me/g/d4xyfuzgvavdgjdjhpun",
      "facebook": "https://facebook.com/tnxmd.gaming"
    },
    "tags": [
      "Mech Wars",
      "Robot",
      "Bắn Súng 3D",
      "iOS Exclusive"
    ],
    "views": "53.6K"
  },
  {
    "id": "otherworld-legends",
    "slug": "otherworld-legends",
    "title": "Otherworld Legends",
    "category": "Di động",
    "genre": "Hành Động Roguelike Beat 'Em Up",
    "platforms": [
      "iOS",
      "iPadOS"
    ],
    "shortDescription": "Tuyệt phẩm nhập vai hành động Roguelike nhịp độ cao từ ChillyRoom với đồ họa Pixel vẽ tay đỉnh cao trên iOS.",
    "fullDescription": "Otherworld Legends đưa các chiến binh từ không gian và thời gian khác nhau đến thử thách ảo ảnh của Asurendra. Làm chủ võ thuật, thu thập cổ vật huyền bí và đánh bại những đối thủ tàn bạo nhất trong thế giới Roguelike đặc sắc.",
    "coverImage": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/90/64/0b/90640b42-cb5c-f889-4938-65dd6087a231/AppIcon-1x_U007emarketing-0-8-0-85-220-0.png/512x512bb.jpg",
    "bannerImage": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/38/1c/30/381c30bf-963c-8e7d-336e-85f415099d95/1.jpg/320x480bb.jpg",
    "gallery": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/38/1c/30/381c30bf-963c-8e7d-336e-85f415099d95/1.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/d8/4e/bd/d84ebde0-51df-c7ef-5297-4e8ef6a68cc3/3.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/26/25/e9/2625e9e4-5c0e-f148-fcee-6d042295da52/4.jpg/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/77/9a/58/779a5844-4cef-4f88-5f41-76075cc94e4d/6.jpg/320x480bb.jpg"
    ],
    "isHot": true,
    "rating": 4.9,
    "version": "v3.7.0",
    "releaseDate": "Mới Cập Nhật",
    "developer": "ChillyRoom Inc.",
    "status": "HOT",
    "features": [
      "Tùy Biến Tài Nguyên & Cửa Hàng Khả Dụng Có Lưu",
      "Mở Khóa Toàn Bộ Skin Trang Phục, Tướng & Thú Cưng Pet",
      "Tùy Biến Realm Soul: Bổ Sung Thuộc Tính Vô Hạn & Hệ Số x10",
      "Mở Khóa Đầy Đủ Vật Phẩm Khu Vườn Garden & 200 Slot Cấm",
      "Tự Động Quét Sạch Mục Tiêu Quái Vật (Auto Kill)",
      "Module Bảo Vệ Phiên Chơi Thế Hệ Mới An Toàn"
    ],
    "systemRequirements": {
      "os": "iOS 12.0 trở lên / iPadOS 12.0+",
      "processor": "Apple A11 Bionic trở lên",
      "memory": "Tối thiểu 3 GB RAM",
      "graphics": "Apple GPU tích hợp Metal",
      "storage": "Tối thiểu 2 GB dung lượng trống"
    },
    "contactUrl": "https://apps.apple.com/vn/app/otherworld-legends/id1439772060?l=vi",
    "contactChannels": {
      "telegram": "https://t.me/tnxmd",
      "zalo": "https://zalo.me/g/d4xyfuzgvavdgjdjhpun",
      "facebook": "https://facebook.com/tnxmd.gaming"
    },
    "tags": [
      "Otherworld Legends",
      "ChillyRoom",
      "Roguelike",
      "iOS Exclusive"
    ],
    "views": "61.8K"
  },
  {
    "id": "banecraft-idle-rpg",
    "slug": "banecraft-idle-rpg",
    "title": "Banecraft : Idle RPG",
    "category": "Di động",
    "genre": "Nhập Vai Nhàn Rỗi / Idle RPG",
    "platforms": [
      "iOS",
      "iPadOS"
    ],
    "shortDescription": "Hành trình phiêu lưu nhập vai rèn đúc trang bị và phát triển sức mạnh nhàn rỗi bất tận trên iOS.",
    "fullDescription": "Banecraft : Idle RPG đưa người chơi vào vương quốc huyền bí nơi bạn chế tạo vũ khí huyền thoại, bồi dưỡng nhân vật và tự động thu thập chiến lợi phẩm ngay cả khi offline trên iPhone và iPad.",
    "coverImage": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/7a/d6/df/7ad6df38-c89d-3115-8c9c-0c38005ba6fe/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    "bannerImage": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/04/85/26/048526cb-13d4-6ba1-b241-0cdb1c08eeed/cd_1000_en_1242x2208_ios5.5_hms_260819-1.png/320x480bb.jpg",
    "gallery": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/04/85/26/048526cb-13d4-6ba1-b241-0cdb1c08eeed/cd_1000_en_1242x2208_ios5.5_hms_260819-1.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/1a/61/93/1a61937e-af85-5bda-902a-3ed5b1f03304/cd_1000_en_1290x2796_ios6.9_hms_260819-2.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/f4/9a/c8/f49ac87c-5d9a-d0da-020a-301d4070f96b/cd_1000_en_1290x2796_ios6.9_hms_260819-3.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/12/9b/19/129b19a6-2a6d-ec8e-133c-946131ae1f28/cd_1000_en_1290x2796_ios6.9_hms_260819-4.png/320x480bb.jpg"
    ],
    "isHot": true,
    "rating": 4.8,
    "version": "v2.24.0",
    "releaseDate": "Mới Cập Nhật",
    "developer": "Game Duo Co.,Ltd.",
    "status": "HOT",
    "features": [
      "Mở Khóa Toàn Bộ Mua Sắm Miễn Phí (Free Shop)",
      "Tùy Chọn Bơm & Khóa Tài Nguyên Khả Dụng Có Lưu Dữ Liệu"
    ],
    "systemRequirements": {
      "os": "iOS 13.0 trở lên / iPadOS 13.0+",
      "processor": "Apple A11 Bionic trở lên",
      "memory": "Tối thiểu 3 GB RAM",
      "graphics": "Apple GPU tích hợp Metal",
      "storage": "Tối thiểu 2 GB dung lượng trống"
    },
    "contactUrl": "https://apps.apple.com/vn/app/banecraft-idle-rpg/id6757404400?l=vi",
    "contactChannels": {
      "telegram": "https://t.me/tnxmd",
      "zalo": "https://zalo.me/g/d4xyfuzgvavdgjdjhpun",
      "facebook": "https://facebook.com/tnxmd.gaming"
    },
    "tags": [
      "Banecraft",
      "Idle RPG",
      "Nhập Vai",
      "iOS Exclusive"
    ],
    "views": "38.7K"
  },
  {
    "id": "gale-knights-idle-rpg",
    "slug": "gale-knights-idle-rpg",
    "title": "Gale Knights Idle RPG",
    "category": "Di động",
    "genre": "Nhập Vai Hành Động Nhàn Rỗi",
    "platforms": [
      "iOS",
      "iPadOS"
    ],
    "shortDescription": "Cuộc chiến hiệp sĩ gió lốc với nhịp điệu chiến đấu chớp nhoáng, chiêu thức đẹp mắt và phát triển hiệp sĩ tối thượng trên iOS.",
    "fullDescription": "Gale Knights Idle RPG kết hợp lối chơi hành động chặt chém tốc độ cao và cơ chế nhàn rỗi tiện lợi. Nâng cấp bộ kỹ năng cuồng phong, thu thập bảo vật và chinh phục các ngục tối hiểm ác trên iOS.",
    "coverImage": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/ae/6a/c0/ae6ac042-7e10-80a5-ad3f-82548aa91e71/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    "bannerImage": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/99/d6/95/99d6957e-560f-8ab3-e978-8f14f385ea91/1_1284x2778_en.png/320x480bb.jpg",
    "gallery": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/99/d6/95/99d6957e-560f-8ab3-e978-8f14f385ea91/1_1284x2778_en.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/4b/4c/33/4b4c33a8-fa5b-477b-e299-f8154303905c/3_1284x2778_en.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/19/89/82/1989822b-1633-c1fb-eb97-38b69a1ff459/2_1284x2778_en.png/320x480bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/10/29/b6/1029b643-a9f1-3c2a-28ac-30165f6c5b7c/5_1284x2778_en.png/320x480bb.jpg"
    ],
    "isHot": true,
    "rating": 4.8,
    "version": "v1.2.2",
    "releaseDate": "Mới Cập Nhật",
    "developer": "LightCON Co., Ltd.",
    "status": "HOT",
    "features": [
      "Bất Tử Tuyệt Đối Khóa Sinh Lực (HP / Né Tránh 100%)",
      "Bơm Đầy Năng Lượng MP & SP Tức Thì",
      "Hồi Chiêu Kỹ Năng & Triệu Hồi 0 Giây",
      "100% Đòn Đánh Chí Mạng & Điểm Yếu Tuyệt Đối",
      "Hạ Sinh Lực Mục Tiêu Địch Còn 1 HP (1 Hit Kill)",
      "Đóng Băng Toàn Bộ Quái Vật & Trùm Boss",
      "Phạm Vi Tấn Công Toàn Màn Hình",
      "Khuếch Đại Hệ Số Sát Thương Đột Phá",
      "Tùy Chỉnh Hệ Số Tốc Độ Trận Đấu Mượt Mà",
      "Tự Động Hút Toàn Bộ Vật Phẩm & Tiền Vàng Rơi",
      "Mở Khóa Toàn Bộ 5 Gói VIP & Bỏ Qua Quảng Cáo",
      "Đồng Bộ Bộ Đếm Diệt Quái Nhiệm Vụ & BattlePass",
      "Nhận Thưởng Mở Khóa (Truyện, Sưu Tập, Chương & Raid)",
      "Module Bảo Toàn Phiên Chơi & Chặn Thu Thập Dữ Liệu Ngầm"
    ],
    "systemRequirements": {
      "os": "iOS 13.0 trở lên / iPadOS 13.0+",
      "processor": "Apple A11 Bionic trở lên",
      "memory": "Tối thiểu 3 GB RAM",
      "graphics": "Apple GPU tích hợp Metal",
      "storage": "Tối thiểu 3 GB dung lượng trống"
    },
    "contactUrl": "https://apps.apple.com/vn/app/gale-knights-idle-rpg/id6757690255",
    "contactChannels": {
      "telegram": "https://t.me/tnxmd",
      "zalo": "https://zalo.me/g/d4xyfuzgvavdgjdjhpun",
      "facebook": "https://facebook.com/tnxmd.gaming"
    },
    "tags": [
      "Gale Knights",
      "Idle RPG",
      "Hiệp Sĩ",
      "iOS Exclusive"
    ],
    "views": "44.9K"
  },
  {
    "id": "au-2-audition-mobile",
    "slug": "au-2-audition-mobile",
    "title": "Au 2 - Chuẩn Audition Mobile",
    "category": "Di động",
    "genre": "Âm Nhạc / Thời Trang / Vũ Đạo 3D",
    "platforms": [
      "iOS",
      "iPadOS"
    ],
    "shortDescription": "Thế giới vũ đạo, âm nhạc và thời trang đỉnh cao chuẩn Audition Mobile từ VTC Game với đồ họa 3D lộng lẫy, kết nối bạn bè và sàn nhảy sôi động trên iOS.",
    "fullDescription": "Au 2 là tựa game âm nhạc và vũ đạo thời trang số 1 trên di động do VTC Game phát hành. Người chơi đắm chìm trong các giai điệu hot trend hàng đầu, thỏa sức so tài vũ đạo với hàng loạt chế độ nhảy huyền thoại và kho thời trang lộng lẫy hàng triệu phong cách.\n\nCơ chế ghép đôi, kết hôn, sảnh chờ 3D tự do và hệ thống thú cưng đa dạng mang đến trải nghiệm giao lưu xã hội tuyệt vời nhất trên iOS.",
    "coverImage": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/f2/f9/a9/f2f9a93d-8d68-b769-475b-79718573e812/AppIcon-1x_U007emarketing-0-8-0-85-220-0.png/512x512bb.jpg",
    "bannerImage": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/8d/31/8a/8d318ad9-c5f1-e9c5-10b5-3847a4bb27a0/1b89af93-9702-4868-a721-e114fbc3d349_1._Game_Am_Nhac.png/1200x630bb.png",
    "gallery": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/8d/31/8a/8d318ad9-c5f1-e9c5-10b5-3847a4bb27a0/1b89af93-9702-4868-a721-e114fbc3d349_1._Game_Am_Nhac.png/800x1200bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/82/a3/8c/82a38cb3-1074-7b56-b41b-8ef80f53590c/96741a5f-c1d7-463f-b5ed-28ee3bef8a07_2._Mode_nhay.png/800x1200bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/69/5b/ad/695bad2e-826d-a4f2-ed9a-aac391fe10c5/6c5bce6f-0b9e-4b8f-aff4-1e3bb1b88345_3._Ket_hon.png/800x1200bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/e0/e4/5c/e0e45cb1-4726-ff20-f40d-653c8796026b/cc05cfad-9c3c-4dbd-a69b-eb221ad14a65_4._Baby.png/800x1200bb.png"
    ],
    "isHot": true,
    "rating": 4.9,
    "version": "v23.4",
    "releaseDate": "Mới Cập Nhật",
    "developer": "VTC - GAME COMPANY LIMITED",
    "status": "HOT",
    "features": [
      "Auto Nhảy 11 Chế Độ (Truyền Thống, BurstAu, Dynamic, Quỹ Đạo, Taiko, Bong Bóng, VOS...)",
      "Luôn Đạt Perfect Tuyệt Đối & Giữ Chuỗi Combo Showtime",
      "Nhân Đôi Điểm Sàn Nhảy (Hệ số x2 Score)",
      "Tăng Tốc Chạy Phòng Chờ 3D (Tùy chỉnh x1.0 -> x3.0)",
      "Mở Rộng Góc Nhìn Camera 3D Toàn Cảnh (FOV Zoom Out)",
      "Bỏ Qua Hướng Dẫn Tân Thủ (Skip Tutorial 1 Chạm)",
      "Mod Skin Mặc Ảo Tại Sảnh & Phòng Chờ (Giữ nguyên trang phục qua mọi ván nhảy)",
      "Tự Động Mặc Ảo Khi Bấm Thử Đồ Ở Shop & Đồ Giám",
      "Khóa Cứng Hiển Thị Cấp Độ VIP 18 (Max SVIP Hiệu Ứng Hoàng Gia)",
      "Random ALL 1 Chạm: Tự phối ngẫu nhiên 38 hạng mục (SVIP, Thức Tỉnh, Cánh, Ngai Vàng, Pet, Danh Hiệu...)",
      "Bộ Lọc Chuẩn Giới Tính Nam/Nữ & Luôn Giữ VIP 18 Khi Random",
      "Hoàn Tác Lịch Sử Phối Đồ (Quay lại ngay bộ trang phục vừa bấm qua)",
      "Tự Động Random ALL Bộ Đồ Mới Sau Mỗi Ván Nhảy",
      "Tủ Đồ Cá Nhân 10 Ô (Lưu vĩnh viễn 10 set đồ yêu thích để mặc lại bất kỳ lúc nào)",
      "Đầy Đủ 38 Danh Sách Đồ & Phụ Kiện 100% Tiếng Việt (Hỗ trợ tìm theo tên & mặc theo ID)"
    ],
    "systemRequirements": {
      "os": "iOS 12.0 trở lên / iPadOS 12.0+",
      "processor": "Apple A11 Bionic trở lên (iPhone 8 Plus trở lên)",
      "memory": "Tối thiểu 3 GB RAM",
      "graphics": "Apple GPU tích hợp Metal",
      "storage": "Tối thiểu 5 GB dung lượng trống trên thiết bị"
    },
    "contactUrl": "https://apps.apple.com/vn/app/au-2-chu%E1%BA%A9n-audition-mobile/id1431610213",
    "contactChannels": {
      "telegram": "https://t.me/tnxmd",
      "zalo": "https://zalo.me/g/d4xyfuzgvavdgjdjhpun",
      "facebook": "https://facebook.com/tnxmd.gaming"
    },
    "tags": [
      "Au 2",
      "Audition Mobile",
      "VTC Game",
      "Âm Nhạc",
      "Vũ Đạo 3D",
      "iOS Exclusive"
    ],
    "views": "58.2K"
  },
  {
    "id": "soul-strike-tan-the",
    "slug": "soul-strike-tan-the",
    "title": "Soul Strike: Tận Thế",
    "category": "Di động",
    "genre": "Hành Động Nhập Vai Hack & Slash",
    "platforms": [
      "iOS",
      "iPadOS"
    ],
    "shortDescription": "Tựa game hành động Roguelike Hack & Slash đỉnh cao từ Com2uS với nhịp độ chiến đấu vũ bão, đồ họa anime hiện đại và hệ thống kỹ năng biến ảo trên iOS.",
    "fullDescription": "Soul Strike: Tận Thế là siêu phẩm nhập vai hành động Roguelike nhịp độ cao đưa người chơi vào chiến trường diệt quái bất tận. Tự do kết hợp hàng trăm kỹ năng, trang bị và đồng minh để càn quét các đợt quái vật hung bạo.\n\nTối ưu hóa mượt mà cho các thiết bị iPhone và iPad với tốc độ khung hình cao, cơ chế chiến đấu nhanh và phong cách đồ họa đặc sắc.",
    "coverImage": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/2c/16/12/2c1612f7-8317-01d6-9e77-bf6db24fad71/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    "bannerImage": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/d6/b8/5b/d6b85b80-0577-5c19-9701-eb4885e70bf4/iphone_2688x1242_en_01.png/1200x630bb.jpg",
    "gallery": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/d6/b8/5b/d6b85b80-0577-5c19-9701-eb4885e70bf4/iphone_2688x1242_en_01.png/800x1200bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/84/6c/f5/846cf585-93cc-2686-c774-adb7f044efd8/1_IPHONE_65.png/800x1200bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/2a/84/62/2a846232-f000-dad9-0ef2-8e3506913c5b/2_IPHONE_65.png/800x1200bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/af/ae/2a/afae2af0-8021-d8e7-6fb3-77c842cf9d9d/3_IPHONE_65.png/800x1200bb.jpg"
    ],
    "isHot": true,
    "rating": 4.8,
    "version": "v3.3.5",
    "releaseDate": "Mới Cập Nhật",
    "developer": "Com2uS Holdings Corporation",
    "status": "HOT",
    "features": [
      "Bất Tử (Khóa Máu & Bất Bại Trận Đấu)",
      "Kỹ Năng Không Hồi Chiêu (0s Cooldown & 100% MP)",
      "Hệ Số Sát Thương Đột Phá (Damage Multiplier & 1-Hit Kill)",
      "Hiện Khung ESP Radar (Định vị quái vật & Boss thời gian thực)",
      "Tự Động Khóa Mục Tiêu Ưu Tiên (Smart Auto-Aim Target)",
      "Tăng Tốc Độ Di Chuyển (Thanh trượt mượt 1.0x -> 5.0x)",
      "Bơm & Khóa Tài Nguyên Khả Dụng Có Lưu (Vàng, Bạc, Năng Lượng & Vé Phó Bản Hợp Lệ)",
      "Tùy Chọn Mức Cộng Linh Hoạt (Preset an toàn tránh quét tài khoản)",
      "Khởi Động Tự Động Kích Hoạt Bypass Toàn Diện (Full Stealth Anti-Cheat)",
      "Chế Độ Stream / Quay Màn Hình (Ẩn hoàn toàn Menu Mod khi livestream & quay video)"
    ],
    "systemRequirements": {
      "os": "iOS 13.0 trở lên / iPadOS 13.0+",
      "processor": "Apple A12 Bionic trở lên (iPhone XS trở lên)",
      "memory": "Tối thiểu 3 GB RAM",
      "graphics": "Apple GPU tích hợp Metal",
      "storage": "Tối thiểu 4 GB dung lượng trống trên thiết bị"
    },
    "contactUrl": "https://apps.apple.com/us/app/soul-strike-t%E1%BA%ADn-th%E1%BA%BF/id6458981827?l=vi",
    "contactChannels": {
      "telegram": "https://t.me/tnxmd",
      "zalo": "https://zalo.me/g/d4xyfuzgvavdgjdjhpun",
      "facebook": "https://facebook.com/tnxmd.gaming"
    },
    "tags": [
      "Soul Strike",
      "Com2uS",
      "Hack and Slash",
      "Roguelike",
      "iOS Exclusive"
    ],
    "views": "46.8K"
  },
  {
    "id": "ballistic-hero-vng",
    "slug": "ballistic-hero-vng",
    "title": "Ballistic Hero VNG",
    "category": "Di động",
    "genre": "Bắn Súng Tọa Độ / Chiến Thuật",
    "platforms": [
      "iOS",
      "iPadOS"
    ],
    "shortDescription": "Tựa game bắn súng tọa độ trực tuyến đỉnh cao từ VNG với phong cách chiến đấu ná kéo căn lực, hỗ trợ vẽ đạn đạo thời gian thực và tùy biến gió trên iOS.",
    "fullDescription": "Ballistic Hero là tựa game bắn súng tọa độ trực tuyến nhiều người chơi nổi tiếng toàn cầu do VNG phát hành. Người chơi điều khiển các loại vũ khí độc đáo, tính toán góc phóng, lực kéo và lựa chọn đạn dược chiến thuật trên nhiều địa hình đa dạng.\n\nTrải nghiệm chế độ đấu đội thời gian thực, solo boss, hệ thống thời trang cá tính và trợ thủ đắc lực với hiệu năng tối ưu trên nền tảng iOS.",
    "coverImage": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/a5/af/57/a5af57c8-7178-213e-a0bb-1010f8847e3c/AppIcon-1x_U007emarketing-0-8-0-85-220-0.png/512x512bb.jpg",
    "bannerImage": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/4e/37/ba/4e37ba48-3d82-00b2-f064-dbddb1c6e695/1.jpg/1200x630bb.jpg",
    "gallery": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/4e/37/ba/4e37ba48-3d82-00b2-f064-dbddb1c6e695/1.jpg/800x1200bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/e3/12/46/e312465d-4a17-1919-9f2c-0ddc13d547a2/2.jpg/800x1200bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/bf/d6/5c/bfd65c0d-10ab-542f-e8f4-38d9927630ea/3.jpg/800x1200bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/9c/3c/44/9c3c444c-8baa-2160-f9db-ecd3890b6937/4.jpg/800x1200bb.jpg"
    ],
    "isHot": true,
    "rating": 4.9,
    "version": "v1.2.1",
    "releaseDate": "Mới Cập Nhật",
    "developer": "VNG SINGAPORE PTE LTD",
    "status": "HOT",
    "features": [
      "Hiện Dự Đoán Đạn Đạo (Vẽ tia chuẩn theo góc bắn, lực kéo và sức gió thời gian thực)",
      "Giữ Đường Đạn Sau Khi Bắn (Lưu lại quỹ đạo vừa bắn để đối chiếu điểm rơi)",
      "Xóa Đường Đạn Vừa Bắn (Làm sạch đường đạn đã lưu)",
      "Chế Độ Nét Vẽ Mảnh (Hiển thị tia đạn mảnh, sắc nét)",
      "Đổi Chiều Gió Tức Thì (Đảo nhanh chiều gió +/-)",
      "Tùy Chỉnh Sức Gió (-5.0 đến +5.0 linh hoạt)",
      "Đặt Lại Hệ Số Gió Chuẩn (Preset gốc 0.7200)",
      "Vi Tinh Chỉnh Hệ Số Gió (Tăng / Giảm bước nhảy ±0.005)",
      "Mở Rộng Tầm Nhìn Camera (Zoom xa quan sát toàn bộ bản đồ)",
      "Tùy Chỉnh Tỉ Lệ Tầm Nhìn (Thanh trượt mượt mà 1.0x - 3.0x)",
      "Phím Tắt Tầm Nhìn 1.5x (Góc nhìn vừa phải)",
      "Phím Tắt Tầm Nhìn 2.2x (Bao quát toàn bản đồ)",
      "Xóa Sương Mù Trận Đấu (Nhìn xuyên sương mù trong trận)",
      "Tăng Tốc Trận Đấu (Tua nhanh lượt chờ)",
      "Tự Động Giảm Tốc Khi Ngắm (Tự về 1.0x khi kéo lực để căn góc chuẩn)",
      "Điều Chỉnh Hệ Số Tốc Độ (Thanh trượt 1.5x - 5.0x / Nút chọn 2.0x & 3.5x)",
      "Mở Khóa Tần Số Quét 120 FPS (Cực mượt trên màn ProMotion)",
      "Chống Tắt Màn Hình (Giữ sáng màn hình khi treo máy)",
      "Tắt/Bật Âm Thanh Nhanh 1 Chạm",
      "Ẩn Khi Quay Màn Hình (Stream Mode — Ẩn hoàn toàn menu & tia vẽ khi livestream/quay video)",
      "Mở Công Cụ GM (Bật bảng điều khiển SRDebugger nội bộ)",
      "Đặt Lại Vị Trí Menu"
    ],
    "systemRequirements": {
      "os": "iOS 13.0 trở lên / iPadOS 13.0+",
      "processor": "Apple A11 Bionic trở lên (iPhone 8 Plus trở lên)",
      "memory": "Tối thiểu 3 GB RAM",
      "graphics": "Apple GPU tích hợp Metal",
      "storage": "Tối thiểu 3 GB dung lượng trống trên thiết bị"
    },
    "contactUrl": "https://apps.apple.com/us/app/ballistic-hero-vng/id6739907881?l=vi",
    "contactChannels": {
      "telegram": "https://t.me/tnxmd",
      "zalo": "https://zalo.me/g/d4xyfuzgvavdgjdjhpun",
      "facebook": "https://facebook.com/tnxmd.gaming"
    },
    "tags": [
      "Ballistic Hero",
      "VNG",
      "Bắn Súng Tọa Độ",
      "iOS Exclusive",
      "Gunny"
    ],
    "views": "52.3K"
  },
  {
    "id": "tokyo-ghoul-thuc-tinh",
    "slug": "tokyo-ghoul-thuc-tinh",
    "title": "Tokyo Ghoul: Thức Tỉnh",
    "category": "Di động",
    "genre": "Nhập Vai Thẻ Tướng Anime 3D",
    "platforms": [
      "iOS",
      "iPadOS"
    ],
    "shortDescription": "Tựa game 3D chuyển thể chính thức từ TV Anime Tokyo Ghoul với đồ họa sống động, lồng tiếng nguyên bản và lối đánh chiến thuật biến ảo trên iOS.",
    "fullDescription": "Đắm chìm vào thế giới Tokyo Ghoul với mô hình 3D chân thực tái hiện sống động cuộc xung đột định mệnh giữa con người và Ngạ Quỷ trên nền tảng iOS. Tự do xây dựng đội hình trong mơ với hơn 30 nhân vật quen thuộc như Ken Kaneki, Touka Kirishima, Shu Tsukiyama...\n\nNắm bắt thời cơ thi triển Tất Sát Kỹ, phối hợp thứ tự chiêu thức xoay chuyển cục diện và so tài đỉnh cao trong các đấu trường PVP thời gian thực.",
    "coverImage": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/fa/5a/8c/fa5a8ceb-7a8a-0a39-b039-dee68fc82c75/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    "bannerImage": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/a8/ca/83/a8ca835d-97d7-4796-e8d4-dc3ea9dbb07f/_U8d8a_U5357KV.jpg/1200x630bb.jpg",
    "gallery": [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/a8/ca/83/a8ca835d-97d7-4796-e8d4-dc3ea9dbb07f/_U8d8a_U5357KV.jpg/800x1200bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/41/5f/75/415f75cc-84dc-6495-2e70-56c936f29a01/_U8d8a_U53571.jpg/800x1200bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/5d/dc/20/5ddc2054-8c4e-40ed-4f1b-dd3251cd890d/_U8d8a_U53572.jpg/800x1200bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/2d/eb/0c/2deb0cb1-d24f-3f3a-5a53-e7681ee1c025/_U8d8a_U53573.jpg/800x1200bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/58/d4/54/58d45443-b0c2-5c10-4f9a-6c6f2147d0a2/_U8d8a_U53574.jpg/800x1200bb.jpg"
    ],
    "isHot": true,
    "rating": 4.9,
    "version": "v10.0",
    "releaseDate": "Mới Ra Mắt",
    "developer": "GAMOTA Corporation",
    "status": "HOT",
    "features": [
      "Quét Sạch Đợt Quái (Kill Current Wave)",
      "Nạp Đầy Điểm Chiến Ý (+100 TP Nộ Hợp Kích)",
      "Thắng Nhanh Trận Đấu (Instant 3-Star Win)",
      "Tốc Độ Game (Speed Engine: Tùy chỉnh 1.0x - 10.0x mượt mà)",
      "Phím Tắt Điều Khiển Nhanh 1 Chạm",
      "Bypass Anti-Cheat & Phantom Zero-Hook Core",
      "Dyld Image Cloaking (Ẩn Dylib Mod An Toàn)",
      "Sideload Profile Shield (Bảo Vệ Chứng Chỉ Cài Đặt)",
      "Anti-Suicide Safety Net (Lưới An Toàn Chống Crash Game)",
      "Anti-SIGPIPE Network Armor (Chống Ngắt Kết Nối Mạng)",
      "Apple ATS Network Bypass (Vượt Rào Kiểm Tra Mạng iOS)",
      "Tencent Heartbeat Preservation (Duy Trì Kết Nối Máy Chủ)"
    ],
    "systemRequirements": {
      "os": "iOS 14.0 trở lên / iPadOS 14.0+",
      "processor": "Apple A12 Bionic trở lên (iPhone XS, iPad Gen 8 trở lên)",
      "memory": "Tối thiểu 3 GB RAM (Khuyên dùng 4 GB+)",
      "graphics": "Apple 4-Core GPU tích hợp Metal",
      "storage": "Tối thiểu 6 GB dung lượng trống trên thiết bị"
    },
    "contactUrl": "https://apps.apple.com/vn/app/tokyo-ghoul-th%E1%BB%A9c-t%E1%BB%89nh/id6751103382",
    "contactChannels": {
      "telegram": "https://t.me/tnxmd",
      "zalo": "https://zalo.me/g/d4xyfuzgvavdgjdjhpun",
      "facebook": "https://facebook.com/tnxmd.gaming"
    },
    "tags": [
      "Tokyo Ghoul",
      "Anime 3D",
      "Nhập Vai",
      "iOS Exclusive",
      "Apple"
    ],
    "views": "68.5K"
  }
];

export function getGameBySlug(slug: string): Game | undefined {
  return GAMES.find((g) => g.slug === slug);
}

export function getAllGameSlugs(): string[] {
  return GAMES.map((g) => g.slug);
}
