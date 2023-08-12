function Skill({ skill, style, level }) {
  return (
    <div className={style}>
      <div className="py-0.5 px-3 flex items-center gap-2 font-medium">
        <span> {skill} </span>
        <span>
          {level === 'beginner' && '👶'}
          {level === 'intermediate' && '👍'}
          {level === 'advanced' && '💪'}
        </span>
      </div>
    </div>
  )
}

export default Skill
