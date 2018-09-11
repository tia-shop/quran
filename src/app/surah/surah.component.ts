import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params, RoutesRecognized } from '@angular/router';
import { SurahService } from './surah.service';
import { Surah, Juz } from './surah';

@Component({
  selector: 'app-surah',
  templateUrl: './surah.component.html',
  styleUrls: ['./surah.component.scss']
})
export class SurahComponent implements OnInit, AfterViewInit {
  @ViewChild('surahList') surahList: ElementRef;
  @ViewChild('juzList') juzList: ElementRef;
  @ViewChild('filter') filter: ElementRef;
  @ViewChild('logo') logo: ElementRef;

  surahs: Surah[] = [];
  juzs: Juz[] = [];
  activeFilter: string = 'surah';
  activeSurah: number;

  constructor(private surahService: SurahService, private router: Router) { }

  ngOnInit() {
    this.surahService.getJuzs().subscribe(juzs => this.juzs = juzs);
    this.surahService.getSurahs().subscribe(surahs => this.surahs = surahs);
    this.router.events.subscribe(val => {
      if (val instanceof RoutesRecognized)
        this.activeSurah = val.state.root.firstChild.params.surah;
    });
  }

  ngAfterViewInit() {
    this._setSurahJuzListHeight();
  }

  _setSurahJuzListHeight() {
    var listHeight = (window.innerHeight - this.logo.nativeElement.clientHeight - this.filter.nativeElement.clientHeight) / window.innerHeight * 100;
    this.surahList.nativeElement.style.height = listHeight+'%';
    this.juzList.nativeElement.style.height = listHeight+'%';
  }

  setActiveFilter(filter) {
    this.activeFilter = filter;
  }

  createRange(min, max) {
    var range = [];
    
    for (var i = min; i <= max; i++)
      range.push(i);

    return range;
  }

}
