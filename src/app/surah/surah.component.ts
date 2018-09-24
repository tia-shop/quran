import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
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
  
  surah: Surah;
  ayahs = [];
  scrollHeight: number;
  scrolled: number = 0;
  offset: number = 0;

  constructor(private surahService: SurahService, private ayahService: AyahService, private activatedRoute: ActivatedRoute,
    public ngProgress: NgProgress) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.ngProgress.start();
      this.surahService.getSurah(params.surah).subscribe(surah => this.surah = surah.chapter);
      this.ayahService.getAyahs(params.surah).subscribe(ayahs => {
        this.ayahs = ayahs.verses
        this.ngProgress.done();
        this.scrollRef.scrollYTo(0, 200);
        this.scrollHeight = this.scrollRef.view.scrollHeight;
        this.scrolled = 0;
      });
    });
  }

  pushAyahs(event) {
    this.scrollRef.update();
    this.scrolled = this.scrollRef.view.scrollTop;
    
    if (this.scrolled >= this.scrollHeight) {
      this.scrollHeight += this.scrolled;
      this.ayahService.getAyahs(this.surah.chapter_number).subscribe(ayahs => {
        ayahs.verses.forEach((ayah, index) => {
          this.ayahs.push(ayah);
        });
      });
    }
  }
}
