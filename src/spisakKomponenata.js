const spisakProcesora = [
  { id: 1, imeBrenda: "Intel", model: "i3-11000", cena: "10000" },
  { id: 2, imeBrenda: "Intel", model: "i5-11500", cena: "18000" },
  { id: 3, imeBrenda: "Intel", model: "i7-11700", cena: "27000" },
  { id: 4, imeBrenda: "Intel", model: "i9-11900", cena: "37000" },
  { id: 5, imeBrenda: "AMD", model: "Ryzen 3 3200g", cena: "12000" },
  { id: 6, imeBrenda: "AMD", model: "Ryzen 5 5300g", cena: "18000" },
  { id: 7, imeBrenda: "AMD", model: "Ryzen 7 5600x", cena: "40000" },
];

const spisakMemorija = [
  { id: 8, imeBrenda: "A Data", model: "8gb dual", cena: "5000" },
  { id: 9, imeBrenda: "A Data", model: "4gb single", cena: "2000" },
  { id: 10, imeBrenda: "Samsung", model: "16gb single", cena: "13500" },
  { id: 11, imeBrenda: "Kingston", model: "4gb quad", cena: "4000" },
  { id: 12, imeBrenda: "Kingston", model: "8gb dual", cena: "6000" },
  { id: 13, imeBrenda: "Kingston", model: "16gb single", cena: "14000" },
];

const spisakGrafickih = [
  { id: 14, imeBrenda: "Gigabajt", model: "Nvidia 3070TI", cena: "150000" },
  { id: 15, imeBrenda: "Msi", model: "Nvidia 3090TI", cena: "350000" },
  { id: 16, imeBrenda: "Gigabajt", model: "Nvidia 3070TI", cena: "130000" },
  { id: 17, imeBrenda: "Palit", model: "AMD 5700xt", cena: "110000" },
  { id: 18, imeBrenda: "Amd", model: "AMD 5700xt", cena: "115000" },
  { id: 19, imeBrenda: "Aorus", model: "AMD 6900xt", cena: "190000" },
];

const spisakKomponenata = [
  {
    nazivGrupe: "Procesori",
    proizvodi: spisakProcesora,
  },
  {
    nazivGrupe: "Memorije",
    proizvodi: spisakMemorija,
  },
  {
    nazivGrupe: "Graficke kartice",
    proizvodi: spisakGrafickih,
  },
];

export default spisakKomponenata;
