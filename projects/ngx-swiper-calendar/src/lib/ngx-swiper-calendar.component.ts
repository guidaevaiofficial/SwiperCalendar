import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'swiper-calendar',
  templateUrl: './ngx-swiper-calendar.component.html',
  styleUrls: ['./ngx-swiper-calendar.component.scss']
})
export class NgxSwiperCalendarComponent implements OnInit {

  @Input() dayFormat = "dd"
  @Input() dateLocales = "en-EN"

  @Input() activeIconColor = "#1C1C1C"
  @Input() disabledIconColor = "#E8E0FF"

  @Input() currentDayFirstDate = false
  @Input() activeDates: Date[] = []

  @Output() onDayChanged = new EventEmitter<Date>()

  n = new Date()
  cds: Date[] = []
  sd: Date = new Date()
  ml = ""
  nmhad = false

  ngOnInit(): void {
    this.gd()
  }

  gd() {
    let cd = new Date(new Date().setHours(0, 0, 0, 0))
    if (this.activeDates.length > 0) {
      cd = new Date(new Date(this.activeDates[0]).setHours(0, 0, 0, 0))
    }
    if (!this.currentDayFirstDate) {
      cd = new Date(cd.setDate(1))
    }
    const ldm = new Date(cd.getFullYear(), cd.getMonth() + 1, 0)
    let ds = []
    while (cd <= ldm) {
      let d = new Date(cd)
      ds.push(d)
      cd.setDate(cd.getDate() + 1)
    }
    if (this.activeDates.length > 0) {
      let adt = []
      this.activeDates.forEach(a => {
        adt.push(new Date(new Date(a).setHours(0, 0, 0, 0)).getTime())
      })
      let ad = []
      ds.forEach(d => {
        if (adt.includes(d.getTime())) {
          ad.push(d)
        }
      })
      this.cds = ad
    } else {
      this.cds = ds
    }
    setTimeout(() => {
      this.cd(this.cds[0])
    }, 0)
  }

  cd(nd) {
    this.sd = new Date(nd)
    const fm = new Date(this.cds[0]).toLocaleString(this.dateLocales, {
      'month': 'long',
      'year': "numeric"
    })
    this.ml = fm.charAt(0).toUpperCase() + fm.slice(1)
    this.onDayChanged.emit(this.sd)
    if (this.activeDates.length > 0) {
      this.cinmhad(this.cds[0])
    }
  }

  nm() {
    const cd = new Date(this.cds[0])
    const fdnm = new Date(new Date(new Date(new Date(cd).setDate(1)).setMonth(new Date(cd).getMonth() + 1)).setHours(0, 0, 0, 0))
    const ldnm = new Date(fdnm.getFullYear(), fdnm.getMonth() + 1, 0)
    let ds = []
    while (fdnm <= ldnm) {
      let d = new Date(fdnm)
      ds.push(d)
      fdnm.setDate(fdnm.getDate() + 1)
    }
    if (this.activeDates.length > 0) {
      let adt = []
      this.activeDates.forEach(a => {
        adt.push(new Date(new Date(a).setHours(0, 0, 0, 0)).getTime())
      })
      let ad = []
      ds.forEach(d => {
        if (adt.includes(d.getTime())) {
          ad.push(d)
        }
      })
      this.cds = ad
    } else {
      this.cds = ds
    }

    this.cd(this.cds[0])
  }

  pm() {
    const cd = new Date(this.cds[0])
    let fd = 1
    if (cd.getMonth() - 1 === this.n.getMonth() && this.currentDayFirstDate) {
      fd = this.n.getDate()
    }
    const fdpm = new Date(new Date(new Date(new Date(cd).setDate(fd)).setMonth(new Date(cd).getMonth() - 1)).setHours(0, 0, 0, 0))
    const ldpm = new Date(fdpm.getFullYear(), fdpm.getMonth() + 1, 0)
    let ds = []
    while (fdpm <= ldpm) {
      let d = new Date(fdpm)
      ds.push(d)
      fdpm.setDate(fdpm.getDate() + 1)
    }
    if (this.activeDates.length > 0) {
      let adt = []
      this.activeDates.forEach(a => {
        adt.push(new Date(new Date(a).setHours(0, 0, 0, 0)).getTime())
      })
      let ad = []
      ds.forEach(d => {
        if (adt.includes(d.getTime())) {
          ad.push(d)
        }
      })
      this.cds = ad
    } else {
      this.cds = ds
    }
    this.cd(this.cds[0])
  }

  isd(cd, nd) {
    const c = new Date(cd)
    const n = new Date(nd)
    return c.getDate() === n.getDate() && c.getMonth() === n.getMonth() && c.getFullYear() === n.getFullYear()
  }

  cinmhad(cd) {
    const nm = cd.getMonth() + 1
    this.nmhad = false
    this.activeDates.forEach(ad => {
      if (ad.getMonth() == nm) {
        this.nmhad = true
        return
      }
    })
  }

}
