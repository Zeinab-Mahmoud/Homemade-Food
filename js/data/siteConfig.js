/**
 * إعدادات الموقع - مطبخ بيتي
 * يمكن تعديل هذا الملف لتغيير اسم الموقع والشعارات والإعدادات العامة
 */

const siteConfig = {
    // الهوية
    name: "مطبخ بيتي",
    tagline: "أكلات بيتية .. بطعم مختلف",
    description: "أشهى الأطباق المصرية البيتية بأيدي ماهرة وحب حقيقي، مُعدّة بأجود المكونات الطازجة.",

    // الشعار
    logo: "img/شعار مطبخ بيتي دافئ.png",
    logoAlt: "شعار مطبخ بيتي",

    // لون العلامة التجارية
    colors: {
        cream: "#FAF4E8",
        darkBrown: "#4A2C17",
        terracotta: "#D97B3F",
        olive: "#7A8B4F",
        heartOrange: "#E8825A"
    },

    // قائمة التنقل
    nav: [
        { label: "الرئيسية", href: "index.html" },
        { label: "قائمة الطعام", href: "menu.html" }
    ],

    // ملاحظة عامة تظهر في الموقع
    priceNote: "* الأسعار تقريبية بالجنيه المصري وقابلة للتغيير",

    // سنة التأسيس (للفوتر)
    year: new Date().getFullYear()
};

if (typeof module !== "undefined") {
    module.exports = { siteConfig };
}
