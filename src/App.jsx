function Header() {
  return(
    <header>
        <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
      </header>
  )
}

function PostsNew() {
  return(
    <div id="posts-new">
    <h1>New post</h1>
    <form>
      <p>Title: <input type="text"/></p>
      <p>Body: <input type="text"/></p>
      <p>Image URL: <input type="text"/></p>
      <button>Submit</button>
    </form>
  </div>
  )
}

function PostsIndex() {
  return(
    <div id="posts-index">
    <h1>All posts</h1>
    <div className="post">
      <h2>Physical Characteristics & Diversity</h2>
      <p>Geckos are a unique and diverse group of lizards known for their distinctive physical characteristics. They belong to the family Gekkonidae, which includes over 1,000 different species, varying widely in size, color, and appearance. Most geckos are small to medium-sized, with the largest species, the New Caledonian giant gecko, reaching up to 14 inches in length. Geckos are renowned for their vibrant colors and patterns, which can range from vivid greens and blues to subtle browns and greys, often serving as camouflage. One of their most notable features is their specialized toe pads, which enable them to climb smooth vertical surfaces and even traverse ceilings with ease. These toe pads contain thousands of tiny hair-like structures called setae, which create a molecular bond with the surface, effectively sticking the gecko&apos;s feet to it.</p>
      <img src="https://good-nature-blog-uploads.s3.amazonaws.com/uploads/2023/08/1920x910-Blog-Header-1-1-1280x640.jpg" alt="a gecko"/>
    </div>

    <div className="post">
      <h2>Habitat & Behavior</h2>
      <p>Geckos are found in warm climates throughout the world, from rainforests and jungles to deserts and urban areas. Their adaptability to different environments is remarkable. In terms of behavior, geckos are predominantly nocturnal, hunting for insects and other small prey under the cover of night. Their exceptional vision, which allows them to see well in low-light conditions, plays a crucial role in their hunting. Geckos are also known for their vocalizations, with some species capable of producing various sounds, including clicks, chirps, and barks, to communicate with each other. This is somewhat unusual among lizards, as most are not known for being vocal. Additionally, many gecko species have the fascinating ability to shed their tails as a defense mechanism. This process, known as caudal autotomy, allows the gecko to escape from predators while the detached tail continues to wiggle, distracting the predator.</p>
      <img src="https://i.natgeofe.com/n/4edeb4dd-326f-4e39-9ffb-9f915bd2574a/1lizardnoise_2x1.jpg" alt="a smiling gecko"/>
    </div>

    <div className="post">
      <h2>Reproduction & Lifespan</h2>
      <p>The reproductive strategies of geckos are as varied as their species. Most geckos lay eggs, with some species laying only a single egg per clutch, while others can lay up to two dozen. Interestingly, in some species, the eggs are adhered to surfaces, such as leaves or tree trunks, while others bury their eggs in the ground. The incubation period for gecko eggs varies depending on the species and environmental conditions. Some geckos exhibit parental care, with the female guarding the eggs until they hatch. The lifespan of geckos also varies widely among species, with some living only a few years, while others, like the leopard gecko, can live up to 20 years in captivity. Geckos&apos; adaptability, diverse reproductive strategies, and varied lifespans have contributed to their success as a species in a wide range of environments across the globe.</p>
      <img src="https://www.wearethemighty.com/uploads/legacy/assets.rbl.ms/17310616/origin.jpg?auto=webp&optimize=high&quality=70&width=1440" alt="a screaming gecko"/>
    </div>

  </div>
  )
}

function Footer() {
  return(
    <footer>
        <p>Copyright 2023</p>
      </footer>
  )
}

function App() {
  return (
    <div>
      <Header/>
      <PostsNew/>
      <PostsIndex/>
      <Footer/>
    </div>
  );
}

export default App;