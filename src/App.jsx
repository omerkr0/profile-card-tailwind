import Avatar from './components/Avatar'
import Intro from './components/Intro'
import SkillList from './components/SkillList'

function App() {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-96 m-10 border-black border-4 border-solid rounded-md">
          <Avatar />
          <div className="p-8 pt-6">
            <Intro />
            <SkillList />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
