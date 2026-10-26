export default function Contact({ contact }) {
  const links = [
    contact.email && { label: 'Email', href: `mailto:${contact.email}`, text: contact.email },
    contact.phone && { label: 'Phone', href: `tel:${contact.phone.replaceAll('-', '')}`, text: contact.phone },
    contact.github && { label: 'GitHub', href: contact.github, text: contact.github },
    contact.blog && { label: 'Blog', href: contact.blog, text: contact.blog },
    contact.sns && { label: 'SNS', href: contact.sns, text: contact.sns },
  ].filter(Boolean);

  return (
    <section id="contact" className="section contact-section">
      <div className="section-heading"><p className="eyebrow">Contact</p><h2>연락처</h2></div>
      <div className="contact-list">
        {links.map((link) => (
          <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined}>
            <span>{link.label}</span>{link.text}
          </a>
        ))}
      </div>
    </section>
  );
}
