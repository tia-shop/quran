import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { SurahService } from '../services/surah.service';
import { JuzService } from '../services/juz.service';

@Component({
  selector: 'app-surah-list',
  templateUrl: './surah-list.component.html',
  styleUrls: ['./surah-list.component.scss']
})
export class SurahListComponent implements OnInit {
  @ViewChild('surahList') surahList: ElementRef;
  @ViewChild('juzList') juzList: ElementRef;
  @ViewChild('filter') filter: ElementRef;
  @ViewChild('logo') logo: ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this._setSurahJuzListHeight();
  }

  activeFilter: string = 'surah';
  activeSurah: number;
  surahs = [];
  juzs = [];

  constructor(private surahService: SurahService, private juzService: JuzService, private router: Router) { }

  ngOnInit() {
    this.surahService.getSurahs().subscribe(surah => this.surahs = surah.chapters);
    this.juzService.getJuzs().subscribe(juz => this.juzs = juz.juzs);

    this.router.events.subscribe(val => {
      if (val instanceof RoutesRecognized)
        this.activeSurah = val.state.root.firstChild.params.surah;
    });
  }

  ngAfterViewInit() {
    this._setSurahJuzListHeight();
  }

  _setSurahJuzListHeight() {
    var listHeight = window.innerHeight - this.logo.nativeElement.clientHeight - this.filter.nativeElement.clientHeight;
    document.getElementsByClassName('surah-list')[0].setAttribute('style', 'height:' + listHeight + 'px');
    document.getElementsByClassName('juz-list')[0].setAttribute('style', 'height:' + listHeight + 'px');
  }

  setActiveFilter(filter) {
    this.activeFilter = filter;
  }

  getSurah(surah, position) {
    var keys = Object.keys(surah);
    var surahIndex;

    if (position === 'first')
      surahIndex = keys[0];
    else if (position === 'last')
      surahIndex = keys[keys.length-1];

    return this.surahs[surahIndex-1].name_simple + ' (' + surah[surahIndex] + ')';

  }

}
