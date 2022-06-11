import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import YoutubeEmbed from "./YoutubeEmbed";
function App() {
    return (
		<div className="App">
			<header className="App-header"></header>

			<div className="navbar">
				<div className="home-icon">
					<i class="bi bi-house-fill"></i>
				</div>
				<div className="wallet-icon">
					<i class="bi bi-wallet2"></i>
				</div>
			</div>
			<div className="title" id="videos">
				<h1 className="fw-bold">Videos</h1>

				<div className="videos">
					<YoutubeEmbed embedId="Ql23uQza7Qo" />
					<div className="vtitle">
						<h2>Eco-friendly tips for students</h2>
					</div>
					<div className="text">
						<h6>
							Even as a student, there's so much you can do to help care for our planet and your home is a great place to start.
						</h6>
					</div>

					<YoutubeEmbed embedId="taQSopdaVQA" />
					<div className="vtitle">
						<h2>Climate Change is affecting you personally. Here's how</h2>
					</div>
					<div className="text">
						<h6>
							Do you know Climate change is making you late for work? It is also making you unhealthy and your coffee expensive. WION's Palki tells you how Climate Change is affecting us personally in ways we don't realise.
						</h6>
					</div>

					<YoutubeEmbed embedId="GR-rm5FC8IA" />
					<div className="vtitle">
						<h2>Save Sanjay Van</h2>
					</div>
					<div className="text">
						<h6>
							Aarna, our 9-year-old climate warrior talks about her favorite spot in the city. She comes here often with her parents for morning walks and cleanup drives. According to a recent notification issued by the Delhi
							development authority, there are plans to convert the Sanjay van area into an eco-tourism hub.
						</h6>
					</div>
				</div>

				<div class="more">
					Watch more videos.
				</div>
				<div className="text">
					<li><a href="https://">Video1 about an issue</a></li>
					<li><a href="https://">Video2 about awareness </a></li>
					<li><a href="https://">Video3 random helpful video</a></li>
					<li><a href="https://">Video4 another random</a></li>
					<li><a href="https://">Video5 another random</a></li>
				</div>
			</div>

			<div class="b-navbar">
				<a href="#events" className="b-navbar-link">
					<i class="bi bi-calendar2-week"></i>
				</a>
				<a href="#howto" className="b-navbar-link">
					<i class="bi bi-magic"></i>
				</a>
				<a href="#articles" className="b-navbar-link">
					<i class="bi bi-book"></i>
				</a>
				<a href="#videos" className="b-navbar-link">
					<i class="bi bi-film"></i>
				</a>
				<a href="#stats" className="b-navbar-link">
					<i class="bi bi-globe"></i>
				</a>
			</div>
		</div>


    );
}

export default App;

