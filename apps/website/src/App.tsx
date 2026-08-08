import { useEffect, useState } from "react"
import {
  ArrowRight, Bot, Check, ChevronDown, CircleCheck, Code2, GitBranch,
  Github, Layers3, LockKeyhole, Menu, Network, Play, Radar, ShieldCheck,
  Sparkles, TerminalSquare, X, Zap,
} from "lucide-react"

type Agent = { name: string; tone: string; input: string; action: string; output: string; icon: typeof Code2 }

const proof = ["Agent Core", "Odoo Skills", "Sandbox Runner", "Policy & Approval", "Evidence Ledger"]
const loop = [
  ["01", "Hiểu yêu cầu", "Đọc business context, module và ranh giới task."],
  ["02", "Lập SRS / RBD", "Chuyển ý tưởng thành phạm vi, dependency và test."],
  ["03", "Tạo patch", "Sinh thay đổi trong worktree và sandbox riêng."],
  ["04", "Chạy kiểm chứng", "Test, diff và evidence trước khi đưa ra review."],
  ["05", "Review & approval", "Con người quyết định với impact rõ ràng."],
  ["06", "Signed change set", "Promotion có provenance, recovery point và rollback."],
] as const
const agents: Agent[] = [
  { name: "Code Agent", tone: "Build", input: "Yêu cầu module bán hàng", action: "Tạo patch theo codebase", output: "Diff + test evidence", icon: Code2 },
  { name: "Architect Agent", tone: "Plan", input: "Mở rộng quy trình kho", action: "Lập SRS, RBD, dependency", output: "Scope đã được chốt", icon: Network },
  { name: "Debug Agent", tone: "Resolve", input: "Traceback Odoo", action: "Truy ngược workflow và log", output: "Fix có thể tái hiện", icon: Zap },
  { name: "Review Agent", tone: "Verify", input: "Change set mới", action: "Rà ACL, migration, regression", output: "Approval brief", icon: ShieldCheck },
]
const faqs = [
  ["Liodev là gì?", "Liodev là Agentic Odoo Development Platform của ERPCloud, dùng chung Agent Core cho Desktop, Web và Headless automation."],
  ["Liodev có sửa thẳng production không?", "Không. Agent chỉ tạo patch hoặc signed change set trong sandbox. Production cần test evidence và approval rõ ràng."],
  ["Liodev có chạy local hoặc self-host không?", "Có. Kiến trúc provider-neutral và local-first cho phép đội ngũ kiểm soát môi trường, model và dữ liệu."],
  ["Liodev khác editor AI phổ thông thế nào?", "Liodev hiểu model, view, security, workflow, dependency và tác động nghiệp vụ của Odoo."],
] as const

function ControlRoom() {
  return <div className="control-room" aria-label="Agent Control Room preview">
    <div className="control-top"><span className="live-dot" /> LIODEV / ERP PROJECT <span className="control-project">sandbox · erpcloud_sale</span><span className="control-state">● protected</span></div>
    <div className="control-layout">
      <div className="control-sidebar"><div className="sidebar-label">PROJECT CONTEXT</div><strong>ERPCloud VN</strong><span>sale_management</span><span>stock_workflow</span><span>accounting_vn</span><div className="sidebar-divider" /><div className="sidebar-label">AGENT SESSION</div><div className="session-user"><span className="avatar"><Sparkles size={12}/></span><span>Architect Agent<small>đang phân tích</small></span></div></div>
      <div className="control-main"><div className="control-heading"><div><span className="mini-kicker">AGENT RUN / 0148</span><h3>Chuẩn hóa quy trình xác nhận đơn</h3></div><span className="status-pill"><span className="pulse-small"/> sandbox</span></div><div className="graph"><div className="graph-line line-a"/><div className="graph-line line-b"/><div className="graph-node node-a"><Layers3 size={14}/> Model</div><div className="graph-node node-b"><GitBranch size={14}/> Workflow</div><div className="graph-node node-c"><LockKeyhole size={14}/> Security</div><div className="graph-node node-core"><Bot size={20}/> AI</div></div><div className="control-events"><div><CircleCheck size={15}/> Đã đọc 12 module liên quan <small>02:14</small></div><div><CircleCheck size={15}/> Dependency graph đã sẵn sàng <small>01:48</small></div><div className="event-active"><Play size={13}/> Đang chuẩn bị preview diff <small>now</small></div></div></div>
    </div>
    <div className="control-footer"><span>Sandbox</span><i/><span>Review</span><i/><span className="active">Staging</span><i/><span>Production</span><span className="footer-lock"><LockKeyhole size={13}/> approval required</span></div>
  </div>
}

function SectionIntro({ kicker, title, text }: { kicker: string; title: string; text?: string }) {
  return <div className="section-intro"><span className="section-kicker">{kicker}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>
}

export default function App() {
  const [open, setOpen] = useState<number | null>(null)
  const [menu, setMenu] = useState(false)
  useEffect(() => { const close = () => setMenu(false); window.addEventListener("hashchange", close); return () => window.removeEventListener("hashchange", close) }, [])
  return <div className="site-shell">
    <header className="nav"><a className="brand" href="#top"><img src="/brand/liodev-logo.svg" alt="Liodev" /></a><button className="menu-toggle" onClick={() => setMenu(!menu)} aria-label="Mở menu" aria-expanded={menu}>{menu ? <X/> : <Menu/>}</button><nav className={menu ? "nav-links open" : "nav-links"}><a href="#agents">Agents</a><a href="#architecture">Kiến trúc</a><a href="#control">An toàn</a><a href="#open-source">Open source</a><a href="#faq">FAQ</a><a className="nav-cta" href="https://github.com/itgisgroup/liocode">Xem GitHub <ArrowRight size={15}/></a></nav></header>
    <main id="top">
      <section className="hero"><div className="hero-glow"/><div className="hero-content"><div className="eyebrow"><span className="pulse"/> ERPCloud / Agentic Odoo Development Platform</div><h1>AI Agents hiểu code.<br/><em>Liodev hiểu doanh nghiệp.</em></h1><p>Code editor và AI Agents dành cho Odoo/ERP — hiểu module, quy trình, dữ liệu và kiến trúc để đội ngũ xây dựng nhanh hơn, an toàn hơn.</p><div className="actions"><a className="button primary" href="https://github.com/itgisgroup/liocode"><Github size={18}/> Khám phá Liodev <ArrowRight size={16}/></a><a className="button ghost" href="https://zalo.me/0909099580">Trao đổi cùng ERPCloud</a></div><div className="hero-meta"><span><Check size={14}/> Local-first</span><span><Check size={14}/> Provider-neutral</span><span><Check size={14}/> Odoo-native context</span></div></div><ControlRoom /></section>
      <section className="proof-strip"><div className="proof-label">A SHARED AGENT CORE FOR ERP</div>{proof.map((item, i) => <div className="proof-item" key={item}><span className={`proof-number n-${i}`}>{String(i + 1).padStart(2, "0")}</span>{item}</div>)}</section>
      <section className="loop-section"><SectionIntro kicker="01 / AGENT LOOP" title="Một vòng lặp Agent. Toàn bộ vòng đời ERP." text="Từ yêu cầu bằng tiếng Việt tới một change set có thể kiểm chứng — mỗi bước đều có context, ranh giới và bằng chứng."/><div className="loop-grid">{loop.map(([n, title, text]) => <article className="loop-item" key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div>{n !== "06" && <ArrowRight size={16}/>}</article>)}</div></section>
      <section id="architecture" className="context-section"><div className="context-copy"><SectionIntro kicker="02 / CONTEXT GRAPH" title="Không chỉ autocomplete. Hiểu cách doanh nghiệp vận hành." text="Liodev nối các lớp kỹ thuật với ngôn ngữ nghiệp vụ để một thay đổi nhỏ vẫn được nhìn trong toàn cảnh hệ thống."/><div className="context-points"><span><Radar size={17}/> Model, view và dữ liệu</span><span><LockKeyhole size={17}/> Security và quyền truy cập</span><span><GitBranch size={17}/> Workflow và dependency</span><span><Layers3 size={17}/> Business impact</span></div></div><div className="context-visual"><div className="context-ring ring-one"/><div className="context-ring ring-two"/><div className="context-core"><Bot size={28}/><strong>Agent Core</strong><small>context-aware</small></div><span className="context-node cn-1">models</span><span className="context-node cn-2">views</span><span className="context-node cn-3">security</span><span className="context-node cn-4">workflow</span></div></section>
      <section id="agents" className="agents-section"><SectionIntro kicker="03 / AGENT MODES" title="Mỗi mode một vai trò. Một chuẩn kiểm chứng." text="Đổi ngữ cảnh mà không đổi công cụ. Agent luôn trả về hành động, trạng thái và evidence rõ ràng."/><div className="agent-grid">{agents.map(({ name, tone, input, action, output, icon: Icon }) => <article className="agent-card" key={name}><div className="agent-card-top"><span className="agent-icon"><Icon size={19}/></span><span>{tone}</span></div><h3>{name}</h3><div className="agent-flow"><span>{input}</span><ArrowRight size={14}/><span>{action}</span></div><div className="agent-output"><CircleCheck size={14}/> {output}</div></article>)}</div></section>
      <section id="control" className="control-section"><div><SectionIntro kicker="04 / ENTERPRISE CONTROL" title="AI đề xuất nhanh. Đội ngũ vẫn giữ quyền quyết định." text="Liodev được thiết kế cho hệ thống không thể đánh đổi sự an toàn lấy tốc độ."/><a className="text-link" href="https://github.com/itgisgroup/liocode">Xem nguyên tắc bảo vệ <ArrowRight size={16}/></a></div><div className="control-list"><div><ShieldCheck/><div><strong>Project-scoped grant</strong><p>Session ngắn hạn, đúng project và environment.</p></div></div><div><LockKeyhole/><div><strong>Không credential trên browser</strong><p>Runtime và Portal giữ trust boundary rõ ràng.</p></div></div><div><GitBranch/><div><strong>Signed change set</strong><p>Test evidence, provenance và recovery point trước promotion.</p></div></div><div><CircleCheck/><div><strong>Human approval bắt buộc</strong><p>Thiếu input hoặc quyền sẽ dừng ở trạng thái chờ.</p></div></div></div></section>
      <section className="surfaces-section"><SectionIntro kicker="05 / ONE CORE, MANY SURFACES" title="Một Agent Core. Nhiều cách làm việc."/><div className="surface-map"><div className="surface-card featured"><span><Sparkles size={17}/> CORE</span><h3>LioDev Agent Core</h3><p>Session, skills, policy và evidence dùng chung.</p></div>{[["Desktop", "IDE nâng cao cho developer"], ["Web", "Không gian cho CEO & key user"], ["Headless", "Automation, CI/CD & support"], ["Control Portal", "Policy, project & approval"], ["Runtime Agent", "Capability boundary trên VPS"]].map(([title, text], i) => <div className={`surface-card surface-${i}`} key={title}><span className="surface-index">0{i + 1}</span><h3>{title}</h3><p>{text}</p></div>)}</div></section>
      <section id="open-source" className="open-section"><div className="open-card"><Github size={35}/><div><SectionIntro kicker="06 / OPEN SOURCE" title="Minh bạch từ nền tảng." text="Liodev là sản phẩm ERPCloud phát triển trên nền OpenCode fork. Source, license và roadmap được công khai để đội ngũ có thể kiểm tra, mở rộng và self-host."/><div className="open-links"><a href="https://github.com/itgisgroup/liocode">Source trên GitHub <ArrowRight size={16}/></a><a href="https://github.com/itgisgroup/liocode/blob/liodev-website/LICENSE">License <ArrowRight size={16}/></a></div></div></div></section>
      <section id="faq" className="faq"><SectionIntro kicker="07 / FAQ" title="Bắt đầu từ câu hỏi đúng."/><div>{faqs.map(([q, answer], i) => <button className={`faq-row ${open === i ? "is-open" : ""}`} key={q} onClick={() => setOpen(open === i ? null : i)}><span>{q}</span>{open === i ? <X size={18}/> : <ChevronDown size={18}/>} {open === i && <p>{answer}</p>}</button>)}</div></section>
    </main><footer><div className="footer-brand"><img src="/brand/liodev-logo-light.svg" alt="Liodev"/><p>Code ERP. Ship with context.</p></div><div className="footer-columns"><div><strong>Sản phẩm</strong><a href="#agents">AI Agents</a><a href="#architecture">Kiến trúc</a><a href="#control">An toàn</a></div><div><strong>Kết nối</strong><a href="https://github.com/itgisgroup/liocode">GitHub</a><a href="https://zalo.me/0909099580">Zalo ERPCloud</a><a href="mailto:info@erpcloud.vn">info@erpcloud.vn</a></div></div><small>© 2026 Liodev · Một sản phẩm của ERPCloud</small></footer>
  </div>
}
