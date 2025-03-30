import ProfileSection from "./componentes/ProfileSection"

function App() {

  const profiles = [
    { id: '1', name: 'Lucas', image: 'https://occ-0-7180-1740.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXHTJntA_317MnwyfnBwo0J496EfxBdfUWo34eImPANmYvUrujpSs5wDBB616vW31s7Tf_I-lSDwwghkXus4oCYqarD52juPOQ.png?r=4e1' },
    { id: '2', name: 'Ruben', image: 'https://occ-0-7180-1740.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTjKpSHNJgtX1GcGPMPH-6gq2R4IGhT-CvzMo2hFJKNTN6Ri5c9A9ihIa1ASs_--Trss_AQCjSrggt26CosxJWQVoX7rgibDgA.png?r=87b' },
    { id: '3', name: 'Carlitos', image: 'https://occ-0-7180-1740.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABeNuT5xg7rYKjLAkTXdCiaZeFXWONGdWXKV6ZmGDMQFuvfuGSd2zeKl5WAU8dKl4hv5Tk7V544sTfUp21najYTOqJr-y872HyA.png?r=3e2' },
    { id: '4', name: 'Maldonado', image: 'https://occ-0-7180-1740.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABVFHTYjLF5VJPEdARSL-YtVOa9yxMBi1WH3Mf0Grvh5y-jTHAOUzQPD-KgnPLu4p_eTj8m0XdYuAiI3_Dmn6S3D1KoavflpkNA.png?r=c10' },
  ]

  return (
    <>
      <ProfileSection profiles={profiles} />
    </>
  )
}

export default App
