import './App.css';
import Card from './components/Card';

const App = () => {
  return (
    <div className="App">
      <h1>Class Favorites at College S <i class="fas fa-heart"></i></h1>
      <h3>Voted by 400 S students</h3>
      <div className="card-container">
        <Card image='https://media.wdwnt.com/2019/02/disneyland-park-closing-early-february-2nd-due-to-rain-featured.jpg' 
              color='red'
              name='The Politics of Disneyland' 
              vote='100' 
              description='Wonder how Disneylands reflects and influences American society?'/>
        <Card image='https://i2.wp.com/foreverlostintravel.com/wp-content/uploads/2021/04/Auschwitz-sign.jpg?fit=688%2C458&ssl=1'
              color='blue'
              name='Dark Tourism' vote='68'
              description='Traveling to places associated with death, tragedy, or disaster for educational or entertainment purposes'/>
        <Card image='https://i.pinimg.com/originals/4b/d3/41/4bd34148fe4dbf41d3808936e85069f3.jpg'
              color = 'orange'
              name='Liberal Arts Mathematics' vote='113'
              description='The study of mathematics within a broader context of the humanities, social sciences, and natural sciences.'/>
        <Card image='https://splash247.com/wp-content/uploads/2016/11/Pacific-Basin-e1604562628142-780x466.jpg'
              color='violet'
              name='Pacific Basin' vote='253' description='A geographic region comprising countries and territories surrounding the Pacific Ocean.'/>
        <Card image='https://prod-ttp.imgix.net/null5499d8b6-601c-455b-873c-57c0197b01da/molecule.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C4725%2C2700&w=1600&h=914&fit=crop&fm=jpg&q=70&auto=format'
              color='green'
              name='Chemistry for Life' vote='210' description='The study of the chemical processes that occur in living organisms and their applications to medicine and biotechnology.'/>
        <Card image='https://imageio.forbes.com/specials-images/dam/imageserve/966248982/960x0.jpg?format=jpg&width=960'
              color='red'
              name='Machine Learning in Chemistry' vote='48' description='The use of artificial intelligence techniques to analyze chemical data, make predictions, and develop new drugs or materials.'/>
        <Card image='https://art.olemiss.edu/wp-content/uploads/sites/273/nggallery/art-340-beginning-ceramics/Ceramics-340-1.jpg'
              color = 'orange'
              name='Beginning Ceramics' vote='79'
              description='An introductory course to the fundamental techniques and processes of creating functional and decorative objects with clay.'/>
        <Card image='https://images.squarespace-cdn.com/content/v1/5b97eead620b858800577ea1/1603487544226-26QFQUL40XY4HC5YGUQV/IC_Blog_Oct2020_2.jpg'
              color='blue'
              name='The Enduring Questions in a Contemporary Context' vote='253' 
              description='A course that explores timeless philosophical questions and applies them to modern-day issues and debates.'/>
        <Card image='https://static.nationalgeographic.co.uk/files/styles/image_3200/public/og-race-ethnicity.jpg?w=1900&h=1268'
              color='violet'
              name='Race, Ethnicity & Human Rights' vote='210' 
              description='An examination of the intersection of race, ethnicity, and human rights with a focus on issues of inequality, discrimination, and social justice.'/>
        <Card image='http://xicanatiahui.weebly.com/uploads/1/1/1/8/111814865/editor/img-0496.jpg?1529031367'
              color='red'
              name='Mexican Indigeneity' vote='48' 
              description='A study of the diverse indigenous cultures and traditions of Mexico, their history, contributions, and contemporary struggles for recognition and rights.'/>
      </div>
    </div>
    
  )
}

export default App;
