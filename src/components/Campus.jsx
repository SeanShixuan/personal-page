export default function Campus() {
  return (
    <section id="campus" className="py-32 px-6 bg-dark/[0.02]">
      <div className="max-w-3xl mx-auto reveal">
        <h2 className="text-2xl md:text-3xl font-light tracking-wide text-center mb-12">在校经历</h2>

        <div className="bg-white/50 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
            <h3 className="text-base font-medium text-dark">体育部</h3>
            <span className="text-xs text-dark/40 font-normal">干事</span>
            <span className="text-xs text-dark/30 font-light">2022年10月 — 2024年1月</span>
          </div>
          <p className="text-sm text-dark/50 font-light leading-relaxed">
            协助策划执行学校运动会、篮球联赛、趣味运动会等各类校园体育活动，统筹活动流程规划、
            场地布置、器材调配与人员分工，协调10+位志愿者参与；负责现场秩序维护、赛事执行及
            突发问题处理，累计组织5+场大型活动，积累了大型活动统筹与跨部门协作经验。
          </p>
        </div>

      </div>
    </section>
  )
}
