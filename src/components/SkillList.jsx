import Skill from './Skill'

const skills = [
  {
    id: 1,
    skill: 'HTML',
    level: 'advanced',
    style: 'bg-orange-500 rounded-md',
  },
  { id: 2, skill: 'CSS', level: 'advanced', style: 'bg-blue-600 rounded-md' },
  {
    id: 3,
    skill: 'JavaScript',
    level: 'advanced',
    style: 'bg-yellow-400 rounded-md',
  },
  {
    id: 4,
    skill: 'React',
    level: 'intermediate',
    style: 'bg-sky-500 rounded-md',
  },
  {
    id: 5,
    skill: 'NextJS',
    level: 'intermediate',
    style: 'bg-indigo-300 rounded-md',
  },
  {
    id: 6,
    skill: 'Tailwind CSS',
    level: 'intermediate',
    style: 'bg-sky-400 rounded-md',
  },
  {
    id: 7,
    skill: 'Bootstrap',
    level: 'advanced',
    style: 'bg-purple-600 rounded-md',
  },
]

function SkillList() {
  return (
    <div className="flex flex-wrap gap-4 mt-4">
      {skills.map((skill) => (
        <Skill
          key={skill.id}
          skill={skill.skill}
          style={skill.style}
          level={skill.level}
        />
      ))}
    </div>
  )
}

export default SkillList
