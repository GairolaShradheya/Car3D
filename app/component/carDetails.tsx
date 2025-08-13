type CarDetails = {
  id: number;
  filename: string;
  name: string;
  year: number;
  type: string;
  engine: string;
  hp: number;
  topSpeed: string;
  origin: string;
}

export const carDetails: CarDetails[] = [
  {
    id: 0,
    filename: "free_1975_porsche_911_930_turbo.glb",
    name: "Porsche 911 Turbo (1975)",
    year: 1975,
    type: "Sports Car",
    engine: "3.0L Flat-6 Turbo",
    hp: 260,
    topSpeed: "155 mph",
    origin: "Germany",
  },
  {
    id: 1,
    filename: "free_bmw_m3_e30.glb",
    name: "BMW M3 E30",
    year: 1986,
    type: "Sports Sedan",
    engine: "2.3L I4",
    hp: 192,
    topSpeed: "146 mph",
    origin: "Germany",
  },
  {
    id: 2,
    filename: "porsche_gt3_rs.glb",
    name: "Porsche GT3 RS",
    year: 2022,
    type: "Track-focused Sports Car",
    engine: "4.0L Flat-6 NA",
    hp: 518,
    topSpeed: "184 mph",
    origin: "Germany",
  },
  {
    id: 3,
    filename: "jiotto_caspita_f1_road_car_1989_by_alex.ka..glb",
    name: "Jiotto Caspita (1989)",
    year: 1989,
    type: "Prototype Supercar",
    engine: "F1 3.5L V10",
    hp: 450,
    topSpeed: "199 mph",
    origin: "Japan",
  },
  {
    id: 4,
    filename: "nissan_skyline_gtr_r35.glb",
    name: "Nissan GT-R R35",
    year: 2009,
    type: "High-Performance Coupe",
    engine: "3.8L V6 Twin Turbo",
    hp: 565,
    topSpeed: "196 mph",
    origin: "Japan",
  },
  {
    id: 5,
    filename: "bmw_m4_f82.glb",
    name: "BMW M4 F82",
    year: 2014,
    type: "Performance Coupe",
    engine: "3.0L I6 Twin Turbo",
    hp: 425,
    topSpeed: "155 mph",
    origin: "Germany",
  },
];


