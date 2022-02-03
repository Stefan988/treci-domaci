const spisakProcesora = [
  { imeBrenda: "Intel", model: "i3-11000", cena: "10000" },
  { imeBrenda: "Intel", model: "i5-11500", cena: "18000" },
  { imeBrenda: "Intel", model: "i7-11700", cena: "27000" },
  { imeBrenda: "Intel", model: "i9-11900", cena: "37000" },
  { imeBrenda: "AMD", model: "Ryzen 3 3200g", cena: "12000" },
  { imeBrenda: "AMD", model: "Ryzen 5 5300g", cena: "18000" },
  { imeBrenda: "AMD", model: "Ryzen 7 5600x", cena: "40000" },
];

const spisakMemorija = [
  [
    { imeBrenda: "A Data", model: "8gb dual", cena: "5000" },
    { imeBrenda: "A Data", model: "4gb single", cena: "2000" },
    { imeBrenda: "Samsung", model: "16gb single", cena: "13500" },
    { imeBrenda: "Kingston", model: "4gb quad", cena: "4000" },
    { imeBrenda: "Kingston", model: "8gb dual", cena: "6000" },
    { imeBrenda: "Kingston", model: "16gb single", cena: "14000" },
  ],
];

const spisakGrafickih = [
  { imeBrenda: "Gigabajt", model: "Nvidia 3070TI", cena: "150000" },
  { imeBrenda: "Msi", model: "Nvidia 3090TI", cena: "350000" },
  { imeBrenda: "Gigabajt", model: "Nvidia 3070TI", cena: "130000" },
  { imeBrenda: "Palit", model: "AMD 5700xt", cena: "110000" },
  { imeBrenda: "Amd", model: "AMD 5700xt", cena: "115000" },
  { imeBrenda: "Aorus", model: "AMD 6900xt", cena: "190000" },
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
