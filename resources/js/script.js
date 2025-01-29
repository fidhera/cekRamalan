// otak dari program Website Ramalan Masa Depan

// array ramalan masa depan(Data Array)
const jobs = [
  "Pilot",
  "Masinis",
  "Nahkoda",
  "Dokter",
  "Polisi",
  "Tentara",
  "Pemadam kebakaran",
  "Guru Agama",
  "Guru Matematika",
  "Guru Bahasa Indonesia",
  "Guru Bahasa Inggris",
  "Guru Bahasa Jepang",
  "Guru Ilmu Pengetahuan Alam",
  "Guru Ilmu Pengetahuan Sosial",
  "Guru Olahraga",
  "Guru Seni Budaya",
  "Guru BK",
  "Guru Biologi",
  "Guru Kimia",
  "Guru Fisika",
  "Guru Sejarah",
  "Guru ",
  "Dosen",
  "Pengacara",
  "Pengusaha",
  "Pengusaha sukses",
  "Penjelajah waktu",
  "Penyanyi terkenal",
  "Ilmuwan hebat",
  "Developer AI",
  "Pelukis legendaris",
  "Kang siomay",
  "Pemburu hantu",
  "Pengembara waktu",
  "Petualang antariksa",
  "Pengemudi UFO",
  "Owner restoran",
  "Penjaga hutan",
  "Owner peternakan",
  "Pengemudi truk",
  "Owner toko",
  "Pembuat film",
  "Penulis terkenal",
  "Pengajar",
  "Owner perusahaan",
  "Pembuat game",
  "Atlet terkenal",
  "Pengawal presiden",
  "Pengawal rahasia",
  "Pengemudi taksi",
  "Pengemudi ojek online",
  "Pemburu alien",
  "Owner kafe",
  "Owner salon",
  "Owner bengkel",
  "Owner sekolah",
  "Owner hotel",
  "Owner rumah makan",
  "Owner toko roti",
  "Owner toko buku",
  "Owner toko mainan",
  "Owner toko pakaian",
  "Owner toko sepatu",
  "Owner toko handphone",
  "Owner toko komputer",
  "Owner toko elektronik",
  "Owner toko kue",
  "Owner toko es krim",
  "Owner toko kopi",
  "Owner toko teh",
  "Owner toko susu",
  "Owner toko minuman",
  "Owner toko makanan",
  "Owner toko minyak",
  "Owner toko bensin",
  "Owner toko air mineral",
  "Owner toko air",
  "Owner toko minuman",
  "Owner toko makanan",
  "Owner toko minyak",
  "Owner toko bensin",
  "Owner toko air mineral",
  "Owner toko air",
  "Owner toko minuman",
  "Owner toko makanan",
];

const love = [
  "Akan bertemu soulmate di perjalanan",
  "Akan menikah dengan selebriti",
  "Hubungan yang damai dan romantis",
  "Petualangan cinta yang seru",
  "Kisah cinta bak dongeng",
  "Cinta yang tak terduga",
  "Cinta yang akan bersemi di musim semi",
  "Cinta yang akan berkembang di musim panas",
  "Cinta yang akan mekar di musim gugur",
  "Cinta yang akan bersemi di musim dingin",
  "Cinta yang akan tumbuh di musim hujan",
  "Cinta yang akan berkembang di musim kemarau",
  "Cinta yang akan mekar di musim semi",
  "Cinta yang akan bersemi di musim panas",
  "Cinta yang akan berkembang di musim gugur",
  "Cinta yang akan mekar di musim dingin",
  "Cinta yang akan tumbuh di musim hujan",
  "Cinta yang akan berkembang di musim kemarau",
  "Cinta yang akan mekar di musim semi",
  "Cinta yang akan bersemi di musim panas",
  "Cinta yang akan berkembang di musim gugur",
  "Cinta yang akan mekar di musim dingin",
  "Cinta yang akan tumbuh di musim hujan",
  "Cinta yang akan berkembang di musim kemarau",
  "Cinta yang akan mekar di musim semi",
  "Cinta yang akan bersemi di musim panas",
  "Cinta yang akan berkembang di musim gugur",
  "Cinta yang akan mekar di musim dingin",
  "Cinta yang akan tumbuh di musim hujan",
  "Cinta yang akan berkembang di musim kemarau",
  "Cinta yang akan mekar di musim semi",
  "Cinta yang akan bersemi di musim panas",
  "Cinta yang akan berkembang di musim gugur",
  "Cinta yang akan mekar di musim dingin",
  "Cinta yang akan tumbuh di musim hujan",
  "Cinta yang akan berkembang di musim kemarau",
  "Cinta yang akan mekar di musim semi",
  "Cinta yang akan bersemi di musim panas",
  "Cinta yang akan berkembang di musim gugur",
];

const hobbies = [
  "Mendaki gunung",
  "Mengoleksi benda antik",
  "Menciptakan musik",
  "Menonton film",
  "Membaca buku",
  "Bermain game",
  "Menulis cerita",
  "Melukis pemandangan",
  "Bersepeda keliling kota",
  "Bermain sepak bola",
  "Bermain basket",
  "Bermain bulu tangkis",
  "Bermain tenis",
  "Bermain badminton",
  "Bermain voli",
  "Bermain golf",
  "Bermain catur",
  "Bermain game online",
  "Bermain game offline",
  "Bermain game mobile",
  "Bermain game console",
  "Bermain game PC",
  "Bermain game PS",
  "Bermain game Xbox",
  "Bermain game Nintendo",
  "Bermain game Sony",
  "Bermain game Microsoft",
  "Bermain game Sega",
  "Bermain game Atari",
  "Bermain game SNK",
  "Bermain game Konami",
  "Bermain game Capcom",
  "Bermain game Bandai",
  "Bermain game Namco",
  "Bermain game Square Enix",
  "Bermain game Bethesda",
  "Bermain game Ubisoft",
  "Bermain game Activision",
  "Bermain game EA",
  "Bermain game Valve",
  "Bermain game Blizzard",
  "Bermain game Riot Games",
  "Bermain game Supercell",
  "Bermain game King",
  "Bermain game Mojang",
  "Bermain game Tencent",
  "Bermain game Netmarble",
  "Bermain game Nexon",
  "Bermain game Square Enix",
  "Bermain game Konami",
  "Bermain game Capcom",
  "Bermain game Bandai",
  "Bermain game Namco",
  "Bermain game Square Enix",
  "Bermain game Bethesda",
  "Bermain game Ubisoft",
  "Bermain game Activision",
  "Bermain game EA",
  "Bermain game Valve",
  "Bermain game Blizzard",
  "Bermain game Riot Games",
  "Bermain game Supercell",
  "Bermain game King",
  "Bermain game Mojang",
  "Bermain game Tencent",
  "Bermain game Netmarble",
  "Bermain game Nexon",
  "Bermain game Square Enix",
  "Bermain",
  "Menjadi content creator",
  "Memasak makanan lezat",
  "Berkebun di planet Mars",
];

// Custom predictions for specific names
const customPredictions = {
  raffael: {
    job: "Fullstack Web Developer",
    love: "Bertemu di hari rabu",
    hobby: "Ngoding dong anjay",
  },

  fidhera: {
    job: "CEO Perusahaan dibidang kecantikan",
    love: "Bertemu di hari kamis",
    hobby: "Bermain musik",
  },

  yahya: {
    job: "Owner toko roti",
    love: "Bertemu di hari jumat",
    hobby: "Bermain game",
  },

  pael: {
    job: "presiden",
    love: "berisik banget bgsttttttttt",
    hobby: "diem ah gasuka ditanya",
  }
};

// store predictions locally
const storedPredictions = {};

function generatePrediction() {
  const name = document.getElementById("nameInput").value;
  if (!name.trim()) {
    alert("Harap masukkan nama Anda!");
    return;
  }

// cek jika nama udah ada di prediksi
  if (storedPredictions[name]) {
    displayPrediction(name, storedPredictions[name]);
    return;
  }

  document.getElementById("loading").classList.remove("hidden");
  document.getElementById("result").classList.add("hidden");

  setTimeout(() => {
    document.getElementById("loading").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");

    // generate prediksi
    let prediction;
    if (customPredictions[name]) {
      prediction = customPredictions[name];
    } else {
      prediction = {
        job: jobs[Math.floor(Math.random() * jobs.length)],
        love: love[Math.floor(Math.random() * love.length)],
        hobby: hobbies[Math.floor(Math.random() * hobbies.length)],
      };
    }

    // Store the prediction
    storedPredictions[name] = prediction;

    displayPrediction(name, prediction);
  }, 2000); // simulasi loading selama 2 detik
}

function displayPrediction(name, prediction) {
  document.getElementById("nameOutput").textContent = name;
  document.getElementById("jobOutput").textContent = prediction.job;
  document.getElementById("loveOutput").textContent = prediction.love;
  document.getElementById("hobbyOutput").textContent = prediction.hobby;
}

function resetPrediction() {
  document.getElementById("nameInput").value = "";
  document.getElementById("loading").classList.add("hidden");
  document.getElementById("result").classList.add("hidden");
}
