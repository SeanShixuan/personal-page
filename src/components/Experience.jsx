export default function Experience() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-3xl mx-auto reveal">
        <h2 className="text-2xl md:text-3xl font-light tracking-wide text-center mb-12">实习经历</h2>

        <div className="space-y-6">

          {/* 广州图络络科技有限公司 */}
          <div className="bg-white/50 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 group">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
              <h3 className="text-base font-medium text-dark">广州图络络科技有限公司</h3>
              <span className="text-xs text-dark/40 font-normal whitespace-nowrap">海外广告运营助理</span>
              <span className="text-xs text-dark/30 font-light">2026年5月 — 2026年6月</span>
            </div>
            <p className="text-sm text-dark/50 font-light leading-relaxed mb-3">
              负责海外效果广告全流程数据监控与流量质量管控，对接上下游广告主与投放渠道，
              挖掘新增投放需求并开展商务谈判，通过全英文沟通完成海外客户开发与维护。
            </p>
            <ul className="list-none space-y-2 text-sm text-dark/50 font-light leading-relaxed">
              <li className="flex gap-2">
                <span className="text-accent mt-1 shrink-0">•</span>
                <span>每日汇总对比日/周/月投放数据，交叉核验广告主与自有双后台数据，识别虚假流量、无效安装等异常，跟踪CR、EVR等核心指标，对接渠道整改，整理每日数据简报同步团队</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent mt-1 shrink-0">•</span>
                <span>深度对接10+家海外广告主与5+家投放渠道，挖掘存量客户新增投放需求，参与商务报价谈判争取更高采购单价；联动上下游协商合作价格，管控项目佣金空间，累计推进5+个广告投放项目落地执行</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent mt-1 shrink-0">•</span>
                <span>独立撰写英文商务拓展邮件，结合优质投放案例与数据战绩开发潜在客户；通过英文即时通讯及视频会议对接客户，累计完成20+封邮件与10+场线上沟通</span>
              </li>
            </ul>
          </div>

          {/* 广东启萌有限公司 */}
          <div className="bg-white/50 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 group">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
              <h3 className="text-base font-medium text-dark">广东启萌有限公司</h3>
              <span className="text-xs text-dark/40 font-normal whitespace-nowrap">学员成长管理师</span>
              <span className="text-xs text-dark/30 font-light">2022年8月 — 2023年8月</span>
            </div>
            <p className="text-sm text-dark/50 font-light leading-relaxed mb-3">
              负责7-14岁青少年篮球培训及比赛活动策划，跟踪学员成长数据与技能进步，
              分析学员表现数据，优化训练方案，积累数据统计与分析能力。
            </p>
            <ul className="list-none space-y-2 text-sm text-dark/50 font-light leading-relaxed">
              <li className="flex gap-2">
                <span className="text-accent mt-1 shrink-0">•</span>
                <span>收集并整理学员训练数据，包括投篮命中率、跑动距离及比赛得分，通过Excel和可视化工具分析学员技能进展，生成月度成长报告，制定个性化训练方案</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent mt-1 shrink-0">•</span>
                <span>策划并执行篮球比赛及训练营活动，统计参与学员数量、赛程成绩及训练反馈，分析各班级数据表现，优化场次安排与训练强度，累计组织并管理10+场校内比赛与训练营活动</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent mt-1 shrink-0">•</span>
                <span>对学员每月训练及比赛数据进行记录和分析，结合学员技能增长曲线和体能数据，调整训练内容与节奏，确保个性化指导精准落地，跟踪30+名学员成长轨迹</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
