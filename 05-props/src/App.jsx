import Card from "./components/Card"

function App() {

  const cardItems = [
    { imageUrl: "https://picsum.photos/id/1011/400/300", imageName: "Mountain River" },
    { imageUrl: "https://picsum.photos/id/1025/400/300", imageName: "Golden Retriever" },
    { imageUrl: "https://picsum.photos/id/1035/400/300", imageName: "Sunset Boulevard" },
    { imageUrl: "https://picsum.photos/id/1043/400/300", imageName: "City Skyline" },
    { imageUrl: "https://picsum.photos/id/1056/400/300", imageName: "Blooming Flowers" },
    { imageUrl: "https://picsum.photos/id/1062/400/300", imageName: "Forest Trail" },
    { imageUrl: "https://picsum.photos/id/1074/400/300", imageName: "Beach Paradise" },
    { imageUrl: "https://picsum.photos/id/1084/400/300", imageName: "Night Lights" },
    { imageUrl: "https://picsum.photos/id/109/400/300", imageName: "Classic Car" },
    { imageUrl: "https://picsum.photos/id/110/400/300", imageName: "Lonely Tree" },
    { imageUrl: "https://picsum.photos/id/111/400/300", imageName: "Bridge Over Lake" },
    { imageUrl: "https://picsum.photos/id/112/400/300", imageName: "Old Library" },
    { imageUrl: "https://picsum.photos/id/113/400/300", imageName: "Vintage Bicycle" },
    { imageUrl: "https://picsum.photos/id/114/400/300", imageName: "Foggy Morning" },
    { imageUrl: "https://picsum.photos/id/115/400/300", imageName: "Winter Wonderland" },
    { imageUrl: "https://picsum.photos/id/116/400/300", imageName: "Canyon View" },
    { imageUrl: "https://picsum.photos/id/117/400/300", imageName: "Tropical Island" },
    { imageUrl: "https://picsum.photos/id/118/400/300", imageName: "Train Track" },
    { imageUrl: "https://picsum.photos/id/119/400/300", imageName: "Street Art" },
    { imageUrl: "https://picsum.photos/id/120/400/300", imageName: "Camping Spot" },
    { imageUrl: "https://picsum.photos/id/121/400/300", imageName: "Snowy Peaks" },
    { imageUrl: "https://picsum.photos/id/122/400/300", imageName: "Lighthouse Point" },
    { imageUrl: "https://picsum.photos/id/123/400/300", imageName: "Serene Lake" },
    { imageUrl: "https://picsum.photos/id/124/400/300", imageName: "Rustic Barn" },
    { imageUrl: "https://picsum.photos/id/125/400/300", imageName: "Fireworks Night" }
  ];
  
// props
  return (
    <div className="flex items-center justify-center flex-wrap gap-5">
      {
        cardItems.map((data) => {
          return <Card url={data?.imageUrl} cardName={data?.imageName}/>
        })
      }
    </div>
  )
}

export default App
