import { Component, OnInit, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { SurahService } from '../services/surah.service';
import { AyahService } from '../services/ayah.service';
import { Surah } from '../interfaces/surah';
import { ScrollbarComponent } from 'ngx-scrollbar';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-surah',
  templateUrl: './surah.component.html',
  styleUrls: ['./surah.component.scss']
})
export class SurahComponent implements OnInit {
  @ViewChild('scrollRef') scrollRef: ScrollbarComponent;
  @ViewChild('scrollRef') sheetWrapper: ElementRef;
  @HostListener("window:scroll", [])
  onWindowScroll(): void {
    var position = document.scrollingElement.scrollHeight;
    var scrolled = window.scrollY + document.documentElement.clientHeight;

    if (position === scrolled)
      this.pushAyahs();
  }

  surah: Surah;
  ayahs = [];
  currentPage: number = 0;
  totalPages: number = 0;

  constructor(private surahService: SurahService, private ayahService: AyahService, private activatedRoute: ActivatedRoute,
    public ngProgress: NgProgress) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.ngProgress.start();
      this.surahService.getSurah(params.surah).subscribe(surah => this.surah = surah.chapter);
      this.ayahService.getAyahs(params.surah).subscribe(ayahs => {
        this.ayahs = ayahs.verses;
        this.currentPage = ayahs.meta.current_page;
        this.totalPages = ayahs.meta.total_pages;
        this.ngProgress.done();
        window.scrollTo(0, 0)
      });
    });

    
  }

  ngAfterViewInit() {
    
  }

  pushAyahs() {
    if (this.totalPages > this.currentPage) {
      this.ngProgress.start();
      this.ayahService.getAyahs(this.surah.chapter_number, this.currentPage * 10).subscribe(ayahs => {
        this.currentPage = ayahs.meta.current_page;
        this.ngProgress.done();
        ayahs.verses.forEach(ayah => this.ayahs.push(ayah));
      });
    }
  }
}
