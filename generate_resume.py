import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT

def create_resume(output_filename):
    os.makedirs(os.path.dirname(output_filename), exist_ok=True)
    
    # Target 1-page compact margins
    doc = SimpleDocTemplate(
        output_filename,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=36,
        bottomMargin=36
    )
    
    styles = getSampleStyleSheet()
    
    # Custom Palette
    PRIMARY = colors.HexColor("#1e1b4b")   # Deep Indigo
    ACCENT = colors.HexColor("#4f46e5")    # Bright Indigo
    DARK_TEXT = colors.HexColor("#0f172a") # Charcoal
    MUTED_TEXT = colors.HexColor("#475569")# Muted Gray
    
    name_style = ParagraphStyle(
        'NameStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=22,
        leading=24,
        textColor=PRIMARY,
        alignment=TA_CENTER
    )
    
    title_style = ParagraphStyle(
        'TitleStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=13,
        textColor=ACCENT,
        alignment=TA_CENTER
    )
    
    contact_style = ParagraphStyle(
        'ContactStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        textColor=MUTED_TEXT,
        alignment=TA_CENTER
    )
    
    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=13,
        textColor=PRIMARY,
        spaceAfter=3
    )
    
    body_style = ParagraphStyle(
        'BodyStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        textColor=DARK_TEXT
    )
    
    bold_body = ParagraphStyle(
        'BoldBody',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=12,
        textColor=DARK_TEXT
    )
    
    bullet_style = ParagraphStyle(
        'BulletStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=DARK_TEXT,
        leftIndent=12
    )

    story = []
    
    # Header
    story.append(Paragraph("UJWAL YADAV", name_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("COMPUTER SCIENCE GRADUATE & FULL-STACK DEVELOPER", title_style))
    story.append(Spacer(1, 4))
    story.append(Paragraph("+977 9811777551 &bull; callmeuzwal@gmail.com &bull; github.com/ujwal4262 &bull; Rupani-01, Saptari, Nepal", contact_style))
    story.append(Spacer(1, 6))
    story.append(HRFlowable(width="100%", thickness=1, color=ACCENT, spaceBefore=2, spaceAfter=8))
    
    # Summary
    story.append(Paragraph("PROFESSIONAL SUMMARY", section_heading))
    story.append(Paragraph("Computer Science & Engineering graduate passionate about building modern web and mobile applications with clean architecture, intuitive user interfaces, scalable backend systems, and solid computer networking principles. Proficient in React.js, Node.js, Express.js, Python Flask, Computer Networks, Cisco Packet Tracer, Wireshark, MongoDB, MySQL, and Figma UI/UX design.", body_style))
    story.append(Spacer(1, 6))
    
    # Education
    story.append(Paragraph("EDUCATION", section_heading))
    edu_data = [
        [
            Paragraph("<b>Bachelor of Technology (B.Tech) in Computer Science & Engineering</b><br/>KIIT University &bull; Bhubaneswar, Odisha, India", body_style),
            Paragraph("<font color='#475569'><b>2022 &ndash; 2026</b></font>", ParagraphStyle('R', parent=body_style, alignment=2))
        ]
    ]
    t_edu = Table(edu_data, colWidths=[400, 140])
    t_edu.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0)]))
    story.append(t_edu)
    story.append(Paragraph("<b>Relevant Coursework:</b> Computer Networks & Protocols, Data Structures & Algorithms, DBMS, Cybersecurity Fundamentals, Software Engineering, Web Development.", ParagraphStyle('Sub', parent=body_style, fontSize=8.5, leading=11)))
    story.append(Spacer(1, 6))
    
    # Technical Skills
    story.append(Paragraph("TECHNICAL SKILLS", section_heading))
    skills_text = (
        "<b>Programming & Web:</b> Java, JavaScript (ES6+), Python, Kotlin, React.js, React Native, Node.js, Express.js, REST APIs<br/>"
        "<b>Networking & Infrastructure:</b> GPON, FTTH, TCP/IP, DNS, DHCP, PPPoE, Cisco Packet Tracer, Wireshark, Router/Switch Config<br/>"
        "<b>Databases & Tools:</b> MongoDB, MySQL, Firebase, Git, GitHub, VS Code, Linux/Windows Systems, Figma UI/UX"
    )
    story.append(Paragraph(skills_text, body_style))
    story.append(Spacer(1, 4))

    # Experience
    story.append(Paragraph("WORK EXPERIENCE", section_heading))
    exp_head = [
        Paragraph("<b>Level 2 Support Engineer (L2 Technical Support)</b><br/>WebSurfer Nepal Communication System Pvt. Ltd. &bull; Kathmandu, Nepal", bold_body),
        Paragraph("<font color='#475569'><b>2026 &ndash; Present</b></font>", ParagraphStyle('R_exp', parent=body_style, alignment=2, fontSize=8.5))
    ]
    t_exp = Table([exp_head], colWidths=[420, 120])
    t_exp.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0)]))
    story.append(t_exp)
    story.append(Paragraph("&bull; Providing Level 2 technical troubleshooting for enterprise & residential broadband, GPON/FTTH, and routing issues.", bullet_style))
    story.append(Paragraph("&bull; Monitoring core switches, OLTs, and CPE/ONT routers for latency degradation, packet drops, and link stability.", bullet_style))
    story.append(Paragraph("&bull; Collaborating with L3 network engineers and field transmission teams to resolve link outages and fiber faults.", bullet_style))
    story.append(Spacer(1, 4))
    
    # Projects
    story.append(Paragraph("FEATURED PROJECTS", section_heading))
    
    projects_list = [
        ("Budget Tracking Application", "React.js, Node.js, Express.js, MongoDB", [
            "Built a full-stack personal finance web application featuring secure JWT user authentication and expense categorization.",
            "Designed interactive data visualization charts for monthly spending trends and automated budget threshold warnings."
        ]),
        ("AI Career & Mental Health Assistant", "React.js, Node.js, Express.js, Python Flask, ML", [
            "Architected a multi-service platform connecting a React client, Express API gateway, and Python Flask ML microservice.",
            "Integrated natural language processing models to deliver personalized career roadmaps and student support guidance."
        ]),
        ("Heart Disease Prediction System", "Python, Scikit-learn, Pandas, NumPy, Flask", [
            "Trained and evaluated machine learning classification models (Random Forest) on clinical patient diagnostic datasets.",
            "Deployed a lightweight Flask web API endpoint for fast real-time cardiovascular disease risk assessments."
        ]),
        ("Figma UI/UX & Product Design System", "Figma, UI/UX Design, Component Libraries", [
            "Created a comprehensive Figma design system featuring atomic UI components, responsive auto-layouts, and design tokens.",
            "Mapped user interaction flows and clickable prototypes to streamline client-side developer handoff."
        ])
    ]
    
    for title, tech, points in projects_list:
        p_head = [
            Paragraph(f"<b>{title}</b> &bull; <font color='#4f46e5'><i>{tech}</i></font>", bold_body),
            Paragraph("<font color='#475569'><i>Full-Stack / ML</i></font>", ParagraphStyle('R2', parent=body_style, alignment=2, fontSize=8))
        ]
        t_proj = Table([p_head], colWidths=[420, 120])
        t_proj.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0)]))
        story.append(t_proj)
        for pt in points:
            story.append(Paragraph(f"&bull; {pt}", bullet_style))
        story.append(Spacer(1, 2.5))
        
    story.append(Spacer(1, 2))
    
    # Certifications
    story.append(Paragraph("CERTIFICATIONS", section_heading))
    story.append(Paragraph("<b>Introduction to Cybersecurity</b> &ndash; Cisco Networking Academy (2025)", body_style))
    story.append(Paragraph("&bull; Training covering network defense fundamentals, risk management, data privacy, and threat analysis.", bullet_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("<b>Cisco Packet Tracer / Networking Basics</b> &ndash; Cisco Networking Academy (2025)", body_style))
    story.append(Paragraph("&bull; Hands-on certification in network simulation, router/switch configuration, IP subnetting, and protocol troubleshooting.", bullet_style))
    
    doc.build(story)
    print(f"Resume generated successfully at {output_filename} ({doc.page} page(s))")

if __name__ == "__main__":
    create_resume("d:/portfolio/src/assets/resume.pdf")
    create_resume("d:/portfolio/public/resume.pdf")
