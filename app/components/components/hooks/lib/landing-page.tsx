"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Award,
  BarChart3,
  CheckCircle,
  Clock,
  Coffee,
  DollarSign,
  FileCheck,
  MessageSquare,
  Shield,
  Star,
  ThumbsUp,
  TrendingUp,
  Users,
  Zap,
  ChevronRight,
  BadgeCheck,
  Sparkles,
  Phone,
  Bell,
  Lock,
  CheckSquare,
  Calendar,
  ArrowUpRight,
  Menu,
  X,
  Gift,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { FormSubmitButton } from "@/components/form-submit-button"
import { OptimizedImage } from "@/components/optimized-image"
import { useMobile } from "@/hooks/use-mobile"
import { useState, useEffect, useRef } from "react"

export default function LandingPage() {
  // ここから長いコンポーネントの内容が続きます...
