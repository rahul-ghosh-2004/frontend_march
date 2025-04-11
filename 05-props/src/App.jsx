import Card from "./components/Card"

function App() {

  const data = [
    {
      "url": "https://images.pexels.com/photos/6774112/pexels-photo-6774112.jpeg",
      "cardName": "Lorem Epsum!"
    },
    {
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPeaLhgvuESxMn6-mzN_e58mSUW8b2J-YI9w&s",
      "cardName": "Lorem Epsum!"
    },
    {
      "url": "https://funkychunky.com/cdn/shop/files/Rectangle_17.png?v=1722965878",
      "cardName": "Lorem Epsum!"
    },
    {
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3UVB0lOhHumcMU3qQm94w7ItZqhkXV7wBgA&s",
      "cardName": "Lorem Epsum!"
    },
    {
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc_0S-jGWqv6txyQIUOBpZlVicMbbUr1Hkhg&s",
      "cardName": "Lorem Epsum!"
    },
    {
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoS16uWORd2ZG08wCxpFW3Oxv9SHihijfvcg&s",
      "cardName": "Lorem Epsum!"
    },
    {
      "url": "https://images.pexels.com/photos/6774112/pexels-photo-6774112.jpeg",
      "cardName": "Lorem Epsum!"
    },
    {
      "url": "https://images.pexels.com/photos/6774112/pexels-photo-6774112.jpeg",
      "cardName": "Lorem Epsum!"
    },
    {
      "url": "https://images.pexels.com/photos/6774112/pexels-photo-6774112.jpeg",
      "cardName": "Lorem Epsum!"
    },
    {
      "url": "https://images.pexels.com/photos/6774112/pexels-photo-6774112.jpeg",
      "cardName": "Lorem Epsum!"
    },
    {
      "url": "https://images.pexels.com/photos/6774112/pexels-photo-6774112.jpeg",
      "cardName": "Lorem Epsum!"
    },
    {
      "url": "https://images.pexels.com/photos/6774112/pexels-photo-6774112.jpeg",
      "cardName": "Lorem Epsum!"
    },
    {
      "url": "https://images.pexels.com/photos/6774112/pexels-photo-6774112.jpeg",
      "cardName": "Lorem Epsum!"
    },
    {
      "url": "https://images.pexels.com/photos/6774112/pexels-photo-6774112.jpeg",
      "cardName": "Lorem Epsum!"
    },
    {
      "url": "https://images.pexels.com/photos/6774112/pexels-photo-6774112.jpeg",
      "cardName": "Lorem Epsum!"
    },
    {
      "url": "https://images.pexels.com/photos/6774112/pexels-photo-6774112.jpeg",
      "cardName": "Lorem Epsum!"
    },
    {
      "url": "https://images.pexels.com/photos/6774112/pexels-photo-6774112.jpeg",
      "cardName": "Lorem Epsum!"
    },
    {
      "url": "https://images.pexels.com/photos/6774112/pexels-photo-6774112.jpeg",
      "cardName": "Lorem Epsum!"
    },
    {
      "url": "https://images.pexels.com/photos/6774112/pexels-photo-6774112.jpeg",
      "cardName": "Lorem Epsum!"
    },
    {
      "url": "https://images.pexels.com/photos/6774112/pexels-photo-6774112.jpeg",
      "cardName": "Lorem Epsum!"
    }
  ]
// props
  return (
    <div className="flex items-center justify-center flex-wrap gap-5">
      {
        data.map((data) => {
          return <Card url={data?.url} cardName={data?.cardName}/>
        })
      }
    </div>
  )
}

export default App
