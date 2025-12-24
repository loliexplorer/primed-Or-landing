export interface Collection {
    id: string;
    title: string;
    vietnameseTitle: string;
    description: string;
    image: string;
    link: string;
}

export const collectionsData: Collection[] = [
    {
        id: "candles",
        title: "Artisan Candles",
        vietnameseTitle: "Nến Thơm Nghệ Thuật",
        description: "Sáp đậu nành tự nhiên kết hợp cùng bấc gỗ, tạo nên không gian ấm áp và thư giãn.",
        image: "/nenthomnghethuat.jpg",
        link: "https://primedor.com/products/nen-thom-go-soi-thong-170ml"
    },
    {
        id: "oils",
        title: "Essential Oils",
        vietnameseTitle: "Tinh Dầu Nguyên Bản",
        description: "Chắt lọc những gì tinh túy nhất từ thiên nhiên, đánh thức mọi giác quan của bạn.",
        image: "/tinhdau.jpg",
        link: "https://primedor.com/products/tinh-dau-khuech-tan-huong-sam-panh-130ml"
    },
    {
        id: "dailycare",
        title: "Cleanser & Serum",
        vietnameseTitle: "Sữa & Serum",
        description: "Sữa rửa mặt và serum tinh tế, giúp bạn chăm sóc da hàng ngày một cách nhẹ nhàng và hiệu quả.",
        image: "/serum.jpg",
        link: "https://primedor.com/products/bo-san-pham-serum-duong-am-daily-care"
    }
];
