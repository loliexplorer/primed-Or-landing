export interface Ingredient {
    id: string;
    name: string;
    vietnameseName: string;
    description: string;
    image: string;
    color: string;
}

export const ingredientsData: Ingredient[] = [
    {
        id: "lavender",
        name: "True Lavender",
        vietnameseName: "Oải Hương Nguyên Bản",
        description: "Được thu hoạch từ những cánh đồng tím biếc tại Provence, mang lại sự thư thái tuyệt đối cho tâm hồn.",
        image: "Lavender.jpg",
        color: "#E6E6FA"
    },
    {
        id: "sandalwood",
        name: "Mysore Sandalwood",
        vietnameseName: "Đàn Hương Mysore",
        description: "Nốt hương gỗ trầm ấm, quý phái, giúp cân bằng cảm xúc và tạo không gian thiền định sâu lắng.",
        image: "Mysore.jpg",
        color: "#C2B280"
    },
    {
        id: "jasmine",
        name: "Royal Jasmine",
        vietnameseName: "Hoa Nhài Hoàng Gia",
        description: "Hương thơm thanh khiết, ngọt ngào, được hái vào lúc bình minh để giữ trọn vẹn tinh túy.",
        image: "jasmine.jpg",
        color: "#F8F8FF"
    },
    {
        id: "bergamot",
        name: "Bergamot",
        vietnameseName: "Cam Bergamot",
        description: "Hương cam chanh tươi mát, rạng rỡ, đánh thức mọi giác quan và khơi dậy nguồn năng lượng tích cực.",
        image: "bergamot.png",
        color: "#98FF98"
    }
];
